const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const userSchema = new Schema({
    name : {type: String, required: true},
    phone_number : {type: String, unique: true, required: true},
    password: {type: String, required: true}
}, {
    timestamps: {createdAt, updatedAt}
});

module.exports = mongoose.model('User', userSchema);