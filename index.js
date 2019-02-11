const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//mongodb mongoose connection
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=>{
    console.log(`Successfully connected to db ${db.name} on ${db.host} at port ${db.port}`)
})

//router import
const article = require('./routes/route')

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/',article)
module.exports = app.listen(port, function() {
    console.log('Listening on port', port)
})