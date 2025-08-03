const express = require('express');
const userRouter=express.Router(); 
const path = require('path'); 
const rootPath = require('../utils/pathUtil');

userRouter.get("/",(req, res, next) => {
    res.sendFile(path.join(rootPath,'views','home.html'));
    
    });

    module.exports = userRouter;