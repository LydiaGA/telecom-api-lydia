const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const textSchema = new Schema({
    sender : {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
    receiver : {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
    message: {type: String, required: true}
}, {
    timestamps: {createdAt : "date_created", updatedAt : "date_modified"}
});

module.exports = mongoose.model('Text', textSchema);