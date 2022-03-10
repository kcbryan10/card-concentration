const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type Player {
        _id: ID
        username: String
    }

    type Auth {
        token: ID!
        player: Player
    }

    type Query {
        players: [Player]
        player(username: String!): Player
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        signupPlayer(username: String!, password: String!): Auth
    }
`;