const { Player, Score } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        player: async (parent, { username }) => {
            return Player.findOne({ username })
                .select('-__v -password')
        },
        players: async () => {
            return Player.find()
            .select('-__v -password')
        },

        score: async () => {
            return Score.find()
        }
    },

    Mutation: {
        signupPlayer: async (parent, args) => {
            const player = await Player.create(args);
            const token = signToken(player)

            return { token, player };
        },
        login: async (parent, {username, password}) => {
            const player = await Player.findOne({username});

            if (!player) {
                throw new AuthenticationError('you suck try again');
            }

            const passwordGood = await player.isCorrectPassword(password);

            if(!passwordGood) {
                throw new AuthenticationError('password no good')
            }

            const token = signToken(player)

            return {token, player};
        },
        submitScore: async (parent, {username}) => {
            await Score.findByIdAndUpdate
        }
    }
}

module.exports = resolvers;