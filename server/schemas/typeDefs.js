const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type Player {
        _id: ID
        username: String
        score: [Score]
    }

    type Auth {
        token: ID!
        player: Player
    }

    type Score {
        _id: ID
        username: String
        score: String
    }

    type Query {
        players: [Player]
        player(username: String!): Player
        scores(username: String!): [Score]
        score(_id: ID!): Score
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        signupPlayer(username: String!, password: String!): Auth
        submitScore(score: String!): Score
    }
`;

module.exports = typeDefs;