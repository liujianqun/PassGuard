//import modules
var fs = require('fs');
	path = require('path');
	crypt = require('./crypt/main');
	cryptfs = require('./cryptfs/main');

// get command line arguements -not so safe to do this at the moment though il allow it,
var password = process.argv[4];
	operation_type = process.argv[2];


//determmine operation type
if (operation_type=='e') {
	var file_path = process.argv[3];
	//read file contents synchronioulsy (seems safe for now)
	console.log("Getting file contents.");
	var file_type = path.extname(file_path);
	//for some reason had to specify for this to be read as UTF-8
	var contents = fs.readFileSync(file_path, 'utf8', function (err,data) { 
		if (err) {
		return console.log(err);
		}
		console.log(data);
	});
	//do the actual encrypting
	var encrypted = crypt.encrypt(contents,password);
	//write encrypted contents to file
	cryptfs.saveToFile(file_path,encrypted,'encrypt',file_type);

}else if(operation_type=='d') {

	var file_path = process.argv[3]; //get file path
	
	var file_type = path.extname(file_path);
	var encrypted_contents = fs.readFileSync(file_path, 'utf8', function (err,data) { //for some reason had to specify for this to be read as UTF
		if (err) {
		return console.log(err);
		}
		console.log(data);
	});
	
	//decrypt file
	var decrypted = crypt.decrypt(encrypted_contents,password);
	//write encrypted contents to file
	cryptfs.saveToFile(file_path,decrypted,'decrypt',file_type);	

}else if(operation_type=='-v'){
	
	console.log("Passguard Version is 0.0.1.")
}else if(operation_type=='-h'){
	
	console.log("| ___ \           |  __ \                   | |
| |_/ /_ _ ___ ___| |  \/_   _  __ _ _ __ __| |
|  __/ _` / __/ __| | __| | | |/ _` | '__/ _` |
| | | (_| \__ \__ \ |_\ \ |_| | (_| | | | (_| |
\_|  \__,_|___/___/\____/\__,_|\__,_|_|  \__,_|
                                               
      ")
};
