import {gql} from '@apollo/client';

export const QUERY_PLAYER = gql`
    query player($username: String!) {
        player(username: $username) {
            _id
            username
        }
    }
`

export const QUERY_SCORES = gql `
    query scores($username: String) {
        scores(username: $username) {
            _id
            username
            score
        }
    }
`