var fs = require('fs')
var path = require('path');

module.exports = {

saveToFile: function(file_path,data,operation) {

	if (operation=='encrypt'){

		var fileName = path.basename(file_path, path.extname(file_path));
		var encrypted_fileName = fileName+'.HEXFILE';
		fs.writeFileSync(encrypted_fileName, data);
		console.log("Successful");
	}else if(operation=='decrypt'){

		var fileName = path.basename(file_path, path.extname(file_path));
		var encrypted_fileName = 'DECRYPTED_'+fileName+'.txt';
		fs.writeFileSync(encrypted_fileName, data);
		console.log("Successful");
	}

}

};