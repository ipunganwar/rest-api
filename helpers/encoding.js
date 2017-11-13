const bcrypt = require('bcrypt');
require('dotenv').config()

function encoding(myPlaintextPassword){
  const saltRounds = 10;

	return new Promise((resolve, reject) =>{
		bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  			if(err){

  				reject(err)
  			}
  			else{
          console.log(hash)
  				resolve(hash)
  			}
		});
	})
	
}

module.exports = encoding

