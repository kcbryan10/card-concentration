const { Player } = require('../models')

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return Player.findOne({ username })
                .select('-__v -password')
        }
    },

    Mutation: {
        signupPlayer: async (parent, args) => {
            const player = await Player.create(args);
            const token = signToken(Player)

            return { token, player };
        }
    }
}