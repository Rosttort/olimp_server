const TeamModel = require('../models/team-model');
const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const TeamDto = require('../dtos/team-dto');
const ApiError = require('../exceptions/api-error');
var mongoose = require('mongoose');

class TeamService{
    async registration_team(name, trainer, members) {
        const candidate = await TeamModel.findOne({name})
        if (candidate) {
            throw ApiError.BadRequest(`Команда с найзванием ${name} уже существует`)
        }
        
        members = members.filter(a => a)
        const team = await TeamModel.create({name, trainer, members})
        const teamDto = new TeamDto(team);

        return {team: teamDto}
    }

    async getTeamsByTrainer(trainer1) {
        const teams = await TeamModel.find({trainer: trainer1});
        return teams;
    }

    async getTeamsByMember(member1) {
        const teams = await TeamModel.find({members: member1});
        return teams;
    }
}

module.exports = new TeamService();