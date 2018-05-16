const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: String,
    birthDate: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('Author', AuthorSchema);