module.exports = class UserDto {
    email;
    id;
    role;
    name; 
    educational;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.role = model.role;
        this.name = model.name;
        this.educational = model.educational;
        this.isActivated = model.isActivated;
    }
}