const {Schema, model} = require('mongoose');

const OlimpSchema = new Schema({
    name: {type: String, unique: true, required: true},
    subject: {type: String, required: true},
    coordinator: {type: String, required: true},
    first_date: {type: Date, required: true},
    last_date: {type: Date, required: true},
    judge: {type: [String], required: true},
    exercise: {type: [String], required: true},
    teams: {type: [String], required: true},
})

module.exports = model('Olimp', OlimpSchema);