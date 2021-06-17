var path= require('path');
var routes = require('./routes')
var bodyParser = require('body-parser');
var request = require('request');
var _ = require('underscore');
var cors = require('cors')
var express =  require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var configMongo = require('../config');
module.exports = (app) => {
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());
//
// mongoose.connect("mongodb+srv://kizzle:kizzle7@cluster0.cqdmi.mongodb.net/myDb?retryWrites=true&w=majority", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// }, (err) => {
//   if(err){
//     throw err;
//   }
//   console.log('Database is startediiii')
//
// });

// mongoose.connect("mongodb+srv://kizzle:kizzle7@cluster0.gxk4s.mongodb.net/myDb?retryWrites=true&w=majority", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// }, (err) => {
//   if(err){
//     throw err;
//   }
//   console.log('Database is started')
//
// });

routes(app)
   return app;

}
