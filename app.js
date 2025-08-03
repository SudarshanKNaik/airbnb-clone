const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require("./routes/userRoutes");
const {hostRouter} = require('./routes/hostRouter');
const path = require('path');
const app = express();
const errorController = require('./controllers/error');
app.set('view engine', 'ejs');
app.set('views',  'views');
const rootPath = require('./utils/pathUtil');
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootPath, 'public')));
app.use(errorController.get404);



    
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);

