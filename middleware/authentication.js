const jwt = require('jsonwebtoken')
require('dotenv').config()

const isLogin = (req, res, next) =>{
	jwt.verify(req.headers.authorization, process.env.SALT_TOKEN, (err, result)=>{
		if(err){
			res.send(err)
		}
		else{
			req.headers.decoded = result
			next()
		}
	})
}

const isAdmin = (req, res, next) =>{
	console.log(req.headers.decoded)
	if(req.headers.decoded.isAdmin){
		next()
	}
	else{
		res.send('Admin only')
	}
}

module.exports = {
	isLogin,
	isAdmin
}