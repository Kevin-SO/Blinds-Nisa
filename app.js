require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const passport = require('passport')
const session = require('express-session')
const { set } = require('mongoose');
const connectDB = require('./server/config/db');
const MongoStore = require('connect-mongo');

const app = express()
const port =  process.env.PORT || 5051

app.use(express.urlencoded({extended: false}))
app.use(express.json())
//app.use(flash())
app.use(session(
    {
        secret: 'Secret',
        resave: false,
        saveUnitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        })
    }
))

app.use(passport.initialize())
app.use(passport.session())

//Static Files
app.use(express.static('public'))


//Connect DB 
connectDB()


//Templating Engine

app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

//Routes
app.use('/', require('./server/routes/auth'))
app.use('/', require('./server/routes/estimate'))
app.use('/', require('./server/routes/user'))
app.use('/', require('./server/routes/dashboard'))


// 404
app.get('*', function(req, res){
    res.status(404).render('404')
    });



// app start
app.listen(port,
    ()=>{
        console.log(`We are live on:  localhost:${port}`)
    });
