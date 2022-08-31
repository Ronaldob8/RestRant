//MODULES and GLOBALES
require('dotenv').config()
const express = require('express')
const app = express()

//EXPRESS SETTINGS
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

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
