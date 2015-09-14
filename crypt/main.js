var crypto= require('crypto');
    algorithm = 'aes-256-ctr';
var ciphers = crypto.getCiphers();

//somehow i know i dont have to repeat this operation twice
module.exports = {

encrypt: function (text,password){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex') //encrypt file to hex(hexadecimal)
  crypted += cipher.final('hex');
  console.log("File has been encrypted. ");
  return crypted;
},
 
decrypt: function (text,password){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  console.log("the file was decrypted.");
  return dec;
}
 
 };
