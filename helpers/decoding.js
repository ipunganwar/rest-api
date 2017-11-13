const bcrypt = require('bcrypt');

function decoding(myPlaintextPassword, hash){
	const saltRounds = 10;

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
