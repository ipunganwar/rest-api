const User = require('../models').User
const jwt = require('jsonwebtoken')
const encoding = require('../helpers/encoding')
const decoding = require('../helpers/decoding')
require('dotenv').config()

const getAll = (req, res) =>{
	User.findAll().then(userData =>{
		res.send(req.headers)
	})
	.catch(err => {
		res.send(err)
	})
}

const getById = (req, res) =>{
	User.findById(req.params.id).then(userData =>{
		res.send(userData)
	}).catch(err => {
		res.send(err)
	})
}

const update = (req, res) =>{
	encoding(req.body.password).then(password => {
		User.update({
			  name : req.body.name,
				email: req.body.email,
				createdAt : new Date(),
				updatedAt : new Date(),
				username : req.body.username,
				password : password
		},{
			where : {
				id : req.params.id
			}
		}).then(() => {
			res.status(200).send('Ok')
		})
	})
	.catch(err => {
		res.status(404).send('error')
	})
}

const destroy = (req, res)=>{
	User.destroy({
		where : {id : req.params.id}
	})
	.then(() =>{
		res.status(200).send('Berhasil destroy')
	})
}

const signup = (req, res)=>{
	encoding(req.body.password).then(password => {
		User.create({
			name : req.body.name,
			email: req.body.email,
			createdAt : new Date(),
			updatedAt : new Date(),
			username : req.body.username,
			password : password,
			isAdmin : false
		})
	})
	.then(() => {
		res.status(201).send('Berhasil signup')
	})
	.catch(err =>{
		res.send(err)
	})
}

const signin = (req, res) =>{
		User.findOne({
			where : {username : req.body.username}
	})
	.then(userData => {
		decoding(req.body.password, userData.password).then(user =>{
			console.log(user)
			if(user){
				jwt.sign({name: userData.name, email: userData.email, 
					username:userData.username, isAdmin:userData.isAdmin, isLogin:true}, 
					process.env.SALT_TOKEN, { expiresIn: '1h' },(err, token)=>{
						res.status(200).send({
							message: 'Login Success',
							token: token
						})
				})
			}
			else{
				res.status(404).send('username or password invalid')
			}
		})
	})
}

const insert = (req, res) => {
	User.create({
			name : req.body.name,
			email: req.body.email,
			createdAt : new Date(),
			updatedAt : new Date(),
			username : req.body.username,
			password : req.body.password,
			isAdmin : req.headers.decoded.isAdmin
	})
	.then(() => {
		res.status(201).send('ok')
	})
	.catch(err => {
		res.send(err)
	})
}

module.exports = {
	getAll,
	getById,
	update,
	destroy,
	signup,
	signin,
	insert
}

