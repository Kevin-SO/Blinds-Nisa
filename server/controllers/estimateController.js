
const mongoose = require('mongoose')

const items=[{Product: 'Zebra', price: 20},{Product: 'Roller', price: 50}]
function total(items){
    const t=2
    // items.forEach(element => 
    //     {
    //         t=t+element.price
        
    // })
    
    return t;

}
const estimate = {
    estimateNo: 12,
    products: items,
    total: total(items)


} 

exports.estimate = async (req, res) => { 
    const locals = {
        title: 'Estimate!'
    }
    res.render('dashboard/estimate/estimate', {
        estimate: estimate.total,
        layout: '../views/layouts/dashboard'
    })
}