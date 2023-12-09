const {Schema, model} = require('mongoose');

const ReplySchema = new Schema({
    member: {type: String, required: true},
    olimp: {type: String, required: true},
    conditions: {type: [String], required: true},
    author_answers: {type: [String], required: true},
    answers: {type: [String], required: true},
    marks: {type: [String], required: false},
    check: {type: Boolean, required: true},
})

module.exports = model('Reply', ReplySchema);