const express = require('express')
const router = express.Router()
const UserController = require('../controllers/users')
const authentication = require('../middleware/authentication')

router.post('/signup',UserController.signup)
router.post('/signin',UserController.signin)
router.get('/users', authentication.isLogin, authentication.isAdmin, UserController.getAll)
router.get('/users/:id',authentication.isLogin, UserController.getById)
router.put('/users/:id', authentication.isLogin, UserController.update)
router.delete('/users/:id', authentication.isLogin, authentication.isAdmin, UserController.destroy)
router.post('/users', authentication.isLogin, authentication.isAdmin, UserController.insert)


module.exports = router