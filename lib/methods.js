

function logItem (item) {
  console.log(item)
}
function getAll(children){
	var names = [];
	for (var i = 0; i < children.length; i+=1) {
		
		console.log(children[i].attributes.NAME);
		names.push(children[i].attributes.NAME)
	}
	
	return names;
	//addressBook.data().then(logItem);
}


module.exports = {
    getAll
};