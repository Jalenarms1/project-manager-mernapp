const { Schema, model, Types} = require("mongoose");
const milestoneSchema = require("./milestoneSchema");

const userSchema = new Schema({
    host: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    milestones: [milestoneSchema],
    completed: {
        type: Boolean,
        default: false
    }
    
})

const Project = model('Project', projectSchema);

module.exports = Project;