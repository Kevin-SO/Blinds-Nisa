const express  = require('express')
const router = express.Router()
const { isLoggedIn } = require('../middleware/checkAuth')
const dC = require('../controllers/dashboardController')


//router.get('/dashboard', dashboardController.dashboard)
router.get('/dashboard/estimate', dC.estimate)



module.exports = router 