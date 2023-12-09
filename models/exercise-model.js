const {Schema, model} = require('mongoose');

const ExerciseSchema = new Schema({
    name: {type: String, unique: true, required: true},
    subject: {type: String, required: true},
    condition: {type: String, required: true},
    author: {type: String, required: true},
    answer: {type: String, required: true},
    olimp: {type: String, required: true},
})

module.exports = model('Exercise', ExerciseSchema);