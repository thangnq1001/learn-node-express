const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const MODEL_NAME = 'User';
const COLLECTION_NAME = 'user';

const UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    }
});

UserSchema.plugin(timestamp);

module.exports = mongoose.model(MODEL_NAME, UserSchema, COLLECTION_NAME);