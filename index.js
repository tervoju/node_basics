const express = require('express')
const config = require('./config')
//const compression = require('compression')
//const debug = require('debug')
const hbs = require('hbs')
const app = express()
const PORT = config.port

//debug('booting')
//app.use(compression())
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))
app.use((req,res, next) => {
    res.render('maintenance.hbs', {
        title: 'HG110',
        text: 'hiljainen huone',
        cups: '-'
    })
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'kannut',
        text: 'hiljainen huone',
        cups: 'G110'
    })
})

console.log (process.env)
app.listen(PORT, () => {
    console.log('listening: '+ PORT)
})