const { Schema, model, Types} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    projects: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
    
})

userSchema.pre('save', async (next ) => {
    if(this.isNew) {
        this.password = await bcrypt.hash(this.password, 10)
    }

    next();
})

userSchema.methods.checkPassword = async (pass) => {
    return bcrypt.compare(pass, this.password )
}

const User = model('User', userSchema);

module.exports = User;