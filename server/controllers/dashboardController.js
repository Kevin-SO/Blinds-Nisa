const mongoose = require('mongoose')


exports.estimate = async (req, res) => { 
    const locals = {
        title: 'Estimate!'
    }
    res.render('dashboard/estimate/estimate', { area: null,
        layout: '../views/layouts/dashboard'
    })
}

exports.products = async (req, res) =>{


}