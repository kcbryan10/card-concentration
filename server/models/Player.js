const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

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

playerSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds= 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})

playerSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password)
}

const Player = model('Player', playerSchema);

module.exports = Player;