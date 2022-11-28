const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        email: String
        username: String
        projects: [Project]
    }

    type Milestone{
        title: String
        description: String
        completed: Boolean
    }

    type Project{
        host: User
        participants: [User]
        name: String
        description: String
        budget: Int
        images: [String]
        milestones: [Milestone]
        completed: Boolean
    }

    type Auth {
        token: ID
        user: User
    }


    type Query {
        getUsers: [User]
        getAUser(_id: ID!): User
        me: User
    }

    type Mutation {
        newUser(email: String!, username: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        

    }


`

module.exports = typeDefs;
