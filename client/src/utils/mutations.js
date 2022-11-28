import { gql } from '@apollo/client';

export const NEW_USER = gql`
    mutation newUser($username: String!, $email: String!, $password: String!){
        newUser(username: $username, email: $email,  password: $password){
            token
            user {
                _id
                username
                projects{
                    host{
                        _id
                        username
                    }
                    participants{
                        _id
                        username
                    }
                    name
                    description
                    budget
                    images
                    milestones{
                        title 
                        description
                        completed
                    }
                    completed
                }
            }
        }
    }
`

export const CHECK_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
                projects{
                    host{
                        _id
                        username
                    }
                    participants{
                        _id
                        username
                    }
                    name
                    description
                    budget
                    images
                    milestones{
                        title 
                        description
                        completed
                    }
                    completed
                }
                
            }
        }
    }
`

