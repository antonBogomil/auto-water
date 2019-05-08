const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
    },
    value: {
        type: String,
    },
    role: {
        type: Number,
        required: true
    }


});

const Article = mongoose.model('Article', articleSchema);
module.exports = {Article};