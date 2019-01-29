var mongoose = require('mongoose')
var Schema = mongoose.Schema
var db = mongoose.connection

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=>{
    console.log(`Successfully connected to db ${db.name} on ${db.host} at port ${db.port}`)
})