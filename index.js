//MODULES and GLOBALES
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//EXPRESS SETTINGS
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//CONTROLLERS
app.use('/places', require('./controllers/places'))

//ROUTS

//home
app.get('/', (req, res) => {
    res.render('home')
})

//error404
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
