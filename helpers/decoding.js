const bcrypt = require('bcrypt');
require('dotenv').config()

function decoding(myPlaintextPassword, hash){

	return new Promise((resolve, reject)=> {
		bcrypt.compare(myPlaintextPassword, hash,function(err, res) {
    		if(err){
    			reject(err)
    		}
    		else{
    			resolve(res)
    		}
		});
	})
}

module.exports = decoding
