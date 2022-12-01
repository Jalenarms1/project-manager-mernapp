import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query getUsers{
        getUsers{
            _id
            username
            
        }
    }
`

export const GET_ME = gql`
 query me{
    me{
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
`

export const GET_A_USER = gql`
    query getAUser($_id: ID!){
        getAUser(_id: $_id){
            _id
            username
            
        }
    }
`