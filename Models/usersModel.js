const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        email: { type: String, validate: [validator.isEmail, 'Invalid email.'], required: true },
        phone: { type: String, required: true, maxlength: 12, minlength: 9 },
        experience: { type: String, required: true, maxlength: 50 },
        achievements: { type: String, required: true, maxlength: 100 },
        createdAt: { type: Date, required: true }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);
userSchema.index({ email: 1 });
const Users = mongoose.model('Users', userSchema);
module.exports = Users;
