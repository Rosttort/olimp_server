module.exports = class ExerciseDto {
    name;
    subject;
    condition;
    author;
    answer;
    olimp;

    constructor(model) {
        this.name = model.name;
        this.subject = model.subject;
        this.condition = model.condition;
        this.author = model.author;
        this.answer = model.answer;
        this.olimp = model.olimp;
    }   
}