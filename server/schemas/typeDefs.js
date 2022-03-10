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
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        lohin(username: String!, password: String!): Auth
        signupPlayer(username: String!, password: String!): Auth
    }
`