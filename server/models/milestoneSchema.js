const { Schema } = require("mongoose");

const milestoneSchema =  new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }

    }
)

module.exports = milestoneSchema;