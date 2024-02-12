const express  = require('express')
const router = express.Router()
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/userMongoose')
const passport = require('passport')

    const authenticateUser = async (username, password, done)=>{
        try{
            let user = await User.findOne({username: username})


            if (await bcrypt.compare(password, user.password)){
                console.log(user)
                return done(null, user)
            }
            else{
                return done(null, false, {message: 'Password incorrect'})
            }
        }
        catch(e){
            console.log(e)

        }

    }
passport.use(new LocalStrategy(authenticateUser))
passport.serializeUser(function(user,done){
    done(null, user.id);
});

// Retrieve user data from session
passport.deserializeUser( function(id, done)
{
    
    User.findById(id, function (err, user){
      done(err, user);
    })
})


router.post('/loginSubmit', passport.authenticate('local', {
    successRedirect:'/dashboard',
    failureRedirect:'/login'
}))


module.exports = router