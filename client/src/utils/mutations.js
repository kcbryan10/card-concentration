import { gql } from "@apollo/client";

export const SIGNUP_PLAYER = gql`
    mutation signupPlayer($username: String!, $password: String!) {
        signupPlayer(username: $username, password: $password) {
            token
            player {
                _id
                username
            }
        }
    }
`;