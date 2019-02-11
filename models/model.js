const mongoose = require('mongoose')

// Test Schema
const testSchema = mongoose.Schema({

    id:{
        type: Number,
        required: true
    },

    title:{
        type: String
    },

    dateCreated: {
        type: Date,
        default: Date.now
    },

    content: {
        type: String
    }
});

let Article = module.exports = mongoose.model('Article', testSchema)