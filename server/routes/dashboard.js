const express  = require('express')
const router = express.Router()
const { isLoggedIn } = require('../middleware/checkAuth')
const dC = require('../controllers/dashboardController')



module.exports = router 