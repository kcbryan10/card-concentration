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

    
`