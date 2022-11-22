const mongoose = require ('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JobsSchema = mongoose.Schema({
    company : {
        type: String,
        required: [true, 'Please provide company name'],
        minlength: 1,
        maxlength: 32
    },
    company : {
        type: String,
        required: [true, 'Please provide position'],
        minlength: 1,
        maxlength: 50
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    }
}, {timestamps: true})

module.exports = JobsSchema