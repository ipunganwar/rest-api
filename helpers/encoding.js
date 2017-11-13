const bcrypt = require('bcrypt');
require('dotenv').config()

function encoding(myPlaintextPassword){
	return new Promise((resolve, reject) =>{
		bcrypt.hash(myPlaintextPassword, process.env.SALT_BCRYPT, function(err, hash) {
  			if(err){
  				reject(err)
  			}
  			else{
  				resolve(hash)
  			}
		});
	})
	
}

module.exports = encoding

