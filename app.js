const express = require('express'),
  app = express(),
  port = 3000,
  mongoose = require('mongoose'),
  list = require('./API/models/product'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/productRoutes.js'); //importing route
routes(app); //register the route


app.listen(port);


console.log('product list RESTful API server started on: ' + port);
