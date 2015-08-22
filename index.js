//import modules
var fs = require('fs')
var path = require('path');
var crypt = require('./crypt/main');
var cryptfs = require('./cryptfs/main');

// get command line arguements
var password = 'd6F3Efeq';
	operation_type = "d";


//determmine operation type
if (operation_type=='e') {
	var file_path = 'file.txt';
	//read file contents synchronioulsy (seems safe for now)
	console.log("Getting file contents.");

	var contents = fs.readFileSync(file_path);

	var encrypted = crypt.encrypt(contents,password);
	
	cryptfs.saveToFile(file_path,encrypted,'encrypt');

}else if(operation_type=='d') {

	var file_path = 'file.HEXFILE';

	var encrypted_contents = fs.readFileSync(file_path, 'utf8', function (err,data) { //for some reason had to specify for this to be read as UTF
		if (err) {
		return console.log(err);
		}
		console.log(data);
	});

	console.log(encrypted_contents);

	var decrypted = crypt.decrypt(encrypted_contents,password);

	console.log(decrypted);

	cryptfs.saveToFile(file_path,decrypted,'decrypt');	

};
