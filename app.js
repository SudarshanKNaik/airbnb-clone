// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
//const {mongoConnect} = require("./utils/databaseUtil");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);

const PORT = 3001;


 
mongoose.connect( 'mongodb+srv://root:root@completecoding1.k2ocptn.mongodb.net/?retryWrites=true&w=majority&appName=CompleteCoding1/airbnb')
.then(()=>

{
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });

})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
