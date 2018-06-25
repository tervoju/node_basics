const express = require('express')
//const compression = require('compression')
//const debug = require('debug')
const hbs = require('hbs')
const app = express()
const PORT = 3000

//debug('booting')
//app.use(compression())
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))
app.use((req,res, next) => {
    res.render('maintenance.hbs, {
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
    console.log("listening")
    //debug('listening port:'+ PORT)
})