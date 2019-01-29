const express = require('express')

const db = require('./mongodb_model/model')
const app = express()
const port = 3000


app.listen(port, function() {
    console.log('Listening on port', port)
})