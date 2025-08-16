const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const houseId = req.params.houseId;
  const editing = req.query.editing === 'true';

  Home.findById(houseId).then ( home => {
    
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }

    console.log(houseId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.getHostHomes = (req, res, next) => {
   Home.find().then((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl,description } = req.body;
  const home = new Home({houseName, price, location, rating, photoUrl,description});
  home.save().then(()=>
  {
    console.log("Home saved Successfully!");
  });

  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } = req.body;

  Home.findById(id)
    .then((home) => {
      home.houseName = houseName;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.photoUrl = photoUrl;
      home.description = description;

      return home.save();
    })
    .then((result) => {
      console.log("Home updated Successfully!", result);
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.error(err);
      next(err);
      res.redirect("/host/host-home-list");
    }).catch(error => {
      console.log('Error while updating home', error);
      res.redirect("/host/host-home-list");
    });
};

 

const Favourite = require("../models/favourite");

exports.postDeleteHome = async (req, res, next) => {
  const houseId = req.params.houseId;
  console.log('Came to delete ', houseId);
  try {
    
    await Favourite.deleteMany({ houseId: houseId });
    
    await Home.findByIdAndDelete(houseId);
    res.redirect("/host/host-home-list");
  } catch (error) {
    console.log('Error while deleting ', error);
    res.redirect("/host/host-home-list");
  }
};