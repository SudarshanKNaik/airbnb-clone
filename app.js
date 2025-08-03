const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require("./routes/userRoutes");
const hostRouter = require('./routes/hostRouter');
const path = require('path');
const app = express();
const rootPath = require('./utils/pathUtil');
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootPath, 'public')));
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
    
});



    
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);

