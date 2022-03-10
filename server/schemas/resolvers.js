const {Player} = require('../models')

const resolvers = {
   Mutation: {
       signupPlayer: async (parent, args) => {
           const user = await Player.create(args);
           const token = signToken(Player)

           return {token, user};
       }
   }
}