import {gql} from '@apollo/client';

export const QUERY_PLAYER = gql`
    query player($username: String!) {
        player(username: $username) {
            _id
            username
        }
    }
`