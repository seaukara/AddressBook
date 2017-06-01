'use strict';

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

var layerID = 'c5ca55fc190948e5bed8511ede12dfda';
function logItem (item) {
	console.log(item)
}


var addressBook=arcgis.item(layerID).then(logItem)
var method = require('./lib/methods.js');

app.get('/', function(req,res){
	console.log(addressBook)
	method.getAll(addressBook)
    res.render('home');
});

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send("Page not found");
});

app.listen(app.get('port'), function () {
    console.log('Express started');
});