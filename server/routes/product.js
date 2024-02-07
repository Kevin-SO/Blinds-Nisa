const express  = require('express')
const router = express.Router()
const { isLoggedIn } = require('../middleware/checkAuth')
const productController = require('../controllers/productController')


router.get('/dashboard/products', dC.products)



module.exports = router