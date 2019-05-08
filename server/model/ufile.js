const mongoose = require('mongoose');
require('dotenv').config();
const uFileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: 1,
    },
    type: {
        type: String,
        required: true,
        minLength: 5
    },
    description: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});
uFileSchema.pre('save',(next)=>{
    next();
});
const UFile = mongoose.model('UFile', uFileSchema);
module.exports = {UFile};
