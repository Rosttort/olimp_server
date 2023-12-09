module.exports = class TeamDto { 
    name;
    trainer;
    members;
    id;

    constructor(model) {
        this.name = model.name;
        this.trainer = model.trainer;
        this.members = model.members;
        this.id = model._id;
    }  
}