require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const bcrypt = require("bcrypt")
const app = express()
const connectDB = require('./server/config/db');


const port =  process.env.PORT || 5051

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Static Files
app.use(express.static('public'))

//Express Session
// app.use(
//     session({
//     secret: 'secret', 
//     resave: false,
//     saveUninitialized: true,
//     cookie:{
//         maxAge: 1000 * 60 * 60 * 24 * 7
//     }

//     })
// )


//Connect DB connectDB()


//Templating Engine

app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/user'))

app.listen(port,
    ()=>{
        console.log(`We are live on:  localhost:${port}`)
    });
