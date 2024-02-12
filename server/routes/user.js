const express  = require('express')
const router = express.Router()
const { isLoggedIn } = require('../middleware/checkAuth')
const userController = require('../controllers/userControllerMongoose')
const passport = require('passport')
/** 
 * Customer Routes
 * */ 

router.get('/', userController.homepage)
router.get('/signup', userController.signup)
router.get('/login', userController.login)
router.post('/signup', userController.signupSubmit)
router.get('/dashboard',isLoggedIn, userController.dashboard)



module.exports = router