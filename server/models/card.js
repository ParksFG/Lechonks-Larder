const { Schema } = require('mongoose');


const cardSchema = new Schema({
    name: {
          type: String 
    },
    card: {
        type: String 
    }
});

module.exports = cardSchema;