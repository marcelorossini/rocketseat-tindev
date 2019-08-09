const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: String,
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);