//import modules
var fs = require('fs');
	path = require('path');
	crypt = require('./crypt/main');
	cryptfs = require('./cryptfs/main');

// get command line arguements
var password = 'd6F3Efeq';
	operation_type = process.argv[2];


//determmine operation type
if (operation_type=='e') {
	var file_path = process.argv[3];
	//read file contents synchronioulsy (seems safe for now)
	console.log("Getting file contents.");
	var file_type = path.extname(file_path);
	
	var contents = fs.readFileSync(file_path, 'utf8', function (err,data) { //for some reason had to specify for this to be read as UTF
		if (err) {
		return console.log(err);
		}
		console.log(data);
	});

	var encrypted = crypt.encrypt(contents,password);
	
	cryptfs.saveToFile(file_path,encrypted,'encrypt',file_type);

}else if(operation_type=='d') {

	var file_path = process.argv[3];
	var file_type = path.extname(file_path);
	var encrypted_contents = fs.readFileSync(file_path, 'utf8', function (err,data) { //for some reason had to specify for this to be read as UTF
		if (err) {
		return console.log(err);
		}
		console.log(data);
	});

	var decrypted = crypt.decrypt(encrypted_contents,password);

	console.log(decrypted);

	cryptfs.saveToFile(file_path,decrypted,'decrypt',file_type);	

};
