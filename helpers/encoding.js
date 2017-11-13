const bcrypt = require('bcrypt');

function encoding(myPlaintextPassword){
	const saltRounds = 10;

	return new Promise((resolve, reject) =>{
		bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
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

