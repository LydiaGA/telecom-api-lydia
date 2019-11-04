const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const callSchema = new Schema({
    caller : {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
    receiver : {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
}, {
    timestamps: {createdAt : "date_created", updatedAt : "date_modified"}
});

module.exports = mongoose.model('Call', callSchema);