const {Schema, model} = require('mongoose');

const TeamSchema = new Schema({
    name: {type: String, unique: true, required: true},
    trainer: {type: String, required: true},
    members: {type: [String], required: true},
})

module.exports = model('Team', TeamSchema);