const { Schema, model } = require('mongoose');


const scoreSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },

        score: {
            type: String,
            required: true,
        }
      
    }
);
const Score= model('Score', scoreSchema);
module.exports = Score;