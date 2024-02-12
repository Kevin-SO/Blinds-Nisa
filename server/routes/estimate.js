const express  = require('express')
const router = express.Router()
const { isLoggedIn } = require('../middleware/checkAuth')
const estimateController = require('../controllers/estimateController')

router.get('/dashboard/estimate',isLoggedIn, estimateController.estimate)

module.exports = router