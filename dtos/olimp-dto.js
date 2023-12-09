module.exports = class OlimpDto {
    name;
    subject;
    coordinator;
    first_date;
    last_date;
    judge;
    exercise;
    teams;

    constructor(model) {
        this.name = model.name;
        this.subject = model.subject;
        this.coordinator = model.coordinator;
        this.first_date = model.first_date;
        this.last_date = model.last_date;
        this.judge = model.judge;
        this.exercise = model.exercise;
        this.teams = model.teams;
    }   
}