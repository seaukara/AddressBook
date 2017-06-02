
var ArcGIS = require('arcgis')
var arcgis = ArcGIS()

var layerID = 'c5ca55fc190948e5bed8511ede12dfda';
function logItem (item) {
	//console.log(item)
	return item;
}


var addressBook=arcgis.item(layerID).then(logItem)
//console.log(addresses)
console.log("inside address model", addressBook)

module.exports = addressBook;