'use strict';
var method = require('./lib/methods.js');
var addressBook = require('./models/address.js');
var express = require("express");
var app = express();

var ArcGIS = require('arcgis')
var arcgis = ArcGIS()

var handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions

// var layerID = 'c5ca55fc190948e5bed8511ede12dfda';
// function logItem (item) {
// 	console.log(item)
// }


//var addressBook=arcgis.item(layerID).then(logItem)



app.get('/', function(req,res){
	console.log("inside /")

	
	var addresses = addressBook;
	addresses.then(function (item) {
	  return item.data()
	}).then(function (data) {
	  console.log(data);
	  var children = data.layers[0].featureSet.features;
	  console.log(children.length)
	  var names = method.getAll(children);
	  console.log(names)
	  res.render('home', {names : names});
	})
});


app.get('/get', function(req,res){
	console.log("inside get")
	var name = req.name;
	
	var addresses = addressBook;
	addresses.then(function (item) {
	  return item.data()
	}).then(function (data) {
	  console.log(data);
	  var children = data.layers[0].featureSet.features;
	  console.log(children.length)
	  //var names = method.getAll(children);
	  console.log(names)
	  res.render('home', {names : names});
	})
});

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send("Page not found");
});

app.listen(app.get('port'), function () {
    console.log('Express started');
});