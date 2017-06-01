
function logItem (item) {
  console.log(item)
}
let getAll = (addressBook) => {
	console.log(AddressBook.get())
	//addressBook.data().then(logItem);
}


module.exports = {
    getAll
};