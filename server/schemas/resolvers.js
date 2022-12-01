const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const {User} = require("../models")

const resolvers = {
    Query: {
        getUsers: async () => {
            return User.find().populate("projects");
        },

        getAUser: async (id) => {
            return User.findById(id).populate("projects");
        },
        me: async (parent, args, context) => {
            if (context.user){
                return User.findOne({_id: context.user._id}).populate('projects')
            }
            throw new AuthenticationError('You must login in first')
        }
    },

    Mutation: {
        newUser: async (parent, {email, username, password}) => {
            const user = await User.create({email, username, password});
            const token = signToken(user);
            return {user, token}
        },
        login: async (parent, {email, password}) => {
            const user = User.findOne({email});

            if(!user) throw new AuthenticationError('User not found')

            let validPass = await user.checkPassword(password)

            if(!validPass){
                throw new AuthenticationError('Error in validation.')
            }else {
                const token = signToken(user);

                return {user, token}
            }
        }
        
    }
}

module.exports = resolvers;
