const Favourite = require("../models/favourite");
const Home = require("../models/home");
const { getDB } = require('../utils/databaseUtil');


exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
   Home.find().then((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
  .populate('houseId')
    .then(favourites => {
      const favouriteHomes = favourites.map(fav => fav.houseId);
          res.render("store/favourite-list", {
            favouriteHomes: favouriteHomes,
            pageTitle: "My Favourites",
            currentPage: "favourites",
          });
        
    });
};


exports.postAddToFavourite = (req, res, next) => {
  const houseId = req.body.id;
  Favourite.findOne({ houseId }).then(result => {
    if (result) {
      console.log("Home already exists in Favourite");
      return res.redirect("/favourites");
    }
    const favourite = new Favourite({ houseId });
    return favourite.save().then(() => {
      console.log("Home added to Favourite Successfully!");
      res.redirect("/favourites");
    });
  }).catch(error => {
    console.log('Error while adding/checking Favourite', error);
    res.redirect("/favourites");
  });
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const houseId = req.params.houseId;

  Favourite.findOneAndDelete({ houseId })
    .then(result => {
      console.log("Home removed from Favourite Successfully!", result);
      return res.redirect("/favourites");   
    })
    .catch(error => {
      console.log("Error while removing from Favourite", error);
      return res.redirect("/favourites");  
    });
    
};


exports.getHomeDetails = (req, res, next) => {
  const houseId = req.params.houseId;
  Home.findById(houseId).then ( home => {
    
    

    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  })
};

