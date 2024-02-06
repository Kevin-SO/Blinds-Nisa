const mongoose = require('mongoose')


exports.estimate = async (req, res) => { 
    const locals = {
        title: 'Estimate!'
    }
    res.render('dashboard/estimate', {
        layout: '../views/layouts/dashboard'
    })
}