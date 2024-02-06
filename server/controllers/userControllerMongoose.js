const User = require('../models/userMongoose')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

/**
 * GET/
 * Homepage
 */

exports.homepage = async(req, res)=>{
    const locals = {
    title: 'Blinds Nisa!'
    }
    res.render('index',{locals})
}
exports.login = async(req, res)=>{
    const locals = {
    title: 'Login!'
    }
    res.render('login',{locals})
}

exports.loginSubmit = async(req, res)=>{
    const locals = {
    title: 'Login!'
    }

    try {
        const user = await User.findOne({username: req.body.username})
        if(!user){
            res.send('Check credentials')
        }

        //compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
        if(isPasswordMatch){
            res.redirect('/dashboard')

        }else{
            res.send('check password')
        }
        
    } catch (error) {
        
    }

}

exports.signup = async(req, res)=>{ 
    const locals = {
    title: 'Blinds Nisa!'
    }
    res.render('signup', {locals})

}

exports.signupSubmit = async (req, res)=>{
    const locals = {
        title: 'Blinds Nisa!'
    }

   
    const newUser= {
            username: req.body.username,
            password: req.body.password,
        }
    

    try{
        let user = await User.findOne({
            username: req.body.username})
    if (user) {
        res.send('This username exists');
    }else{
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(newUser.password, saltRounds)
        newUser.password = hashedPassword




        user = await User.create(newUser);
        res.redirect('/dashboard');
    }
  }
  catch(error){console.log(error);
  }



}


exports.dashboard = async (req, res)=>{ 
    const locals = {
        title: 'Blinds Nisa!'
    }
    res.render('dashboard', {locals,
        layout: '../views/layouts/dashboard'
    })

}