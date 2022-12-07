const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        supertype: {
            type: String,
            required: true
        },
        subtype: {
            type: String,
            require: true
        },
        image: {
            type: String,
            required: true
        },
        uid: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true
        }
    },
   
);

module.exports = mongoose.model('CardMongoose', cardSchema);