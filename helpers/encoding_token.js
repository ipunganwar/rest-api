const jwt = require('jsonwebtoken')

function authorization(token){
	return new Promise((resolve, reject)=>{
		jwt.verify(token, '*&%&&%*&!!@##$', (err, res)=>{
			if(err){
				reject(err)
			}
			else{
				resolve(res)
			}
		})
	})
}

module.exports = authorization