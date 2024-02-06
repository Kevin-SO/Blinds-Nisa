const express  = require('express')
const router = express.Router()
const { isLoggedIn } = require('../middleware/checkAuth')
const userController = require('../controllers/userControllerMongoose')

/** 
 * Customer Routes
 * */ 

router.get('/', userController.homepage)
router.get('/signup', userController.signup)
router.get('/login', userController.login)
router.post('/loginSubmit', userController.loginSubmit)
router.post('/signup', userController.signupSubmit)
router.get('/dashboard', userController.dashboard)



module.exports = router