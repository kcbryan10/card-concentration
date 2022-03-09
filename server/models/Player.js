const {Schema, model} = require('mongoose');

const playerSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String, 
            required: true
        }
    }
)

const Player = model('Player', playerSchema);

module.exports = Player;