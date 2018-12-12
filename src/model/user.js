const mongoose = require('mongoose');
const schemaType = mongoose.Schema.Types;
const timestamp = require('mongoose-timestamp');
const MODEL_NAME = 'User';
const COLLECTION_NAME = 'user';

const UserSchema = new mongoose.Schema({
    username: {
        type: schemaType.String
    },
    password: {
        type: schemaType.String
    },
    email: {
        type: schemaType.String
    },
    firstName: {
        type: schemaType.String
    },
    lastName: {
        type: schemaType.String
    },
    phoneNumber: {
        type: schemaType.String
    },
    role: {
        type: schemaType.String
    },
    managerId: {
        type: schemaType.ObjectId,
        ref: MODEL_NAME
    },
    isActive: {
        type: schemaType.Number,
        default: 1
    }
});

UserSchema.plugin(timestamp);

module.exports = mongoose.model(MODEL_NAME, UserSchema, COLLECTION_NAME);