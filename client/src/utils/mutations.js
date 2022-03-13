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

export const LOGIN_PLAYER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            player {
                _id 
                username
            }
        }
    }
`

export const SUBMIT_SCORE = gql`
mutation SubmitScore($score: String!) {
    submitScore(score: $score) {
        _id
        score
        username
    }
  }
`