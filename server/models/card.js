const { Schema, model } = require('mongoose');

const cardSchema = new Schema(
    {
        cardId: {
            type: String,
            required: true
        },
        cardName: {
            type: String,
            required: true
        },
        cardType: {
            type: Array,
            required: true
        },
        cardNum: {
            type: Number,
            require: true
        },
        dexNum: {
            type: Number,
            required: true
        },
        cardImage: {
            type: String,
            required: true
        },
        cardImageHiRes: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            require: true
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Card = model('Card', cardSchema);

module.exports = Card