const OlimpModel = require('../models/olimp-model');
const TeamModel = require('../models/team-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const OlimpDto = require('../dtos/olimp-dto');
const ApiError = require('../exceptions/api-error');

class OlimpService {
    async registration_olimp(name, subject, coordinator, first_date, last_date, judge, exercise, teams) {
        const candidate = await OlimpModel.findOne({ name })
        if (candidate) {
            throw ApiError.BadRequest(`Олимпиада с найзванием ${name} уже существует`)
        }
        const team = [];
        const olimp = await OlimpModel.create({ name, subject, coordinator, first_date, last_date, judge, exercise, team })
        const olimpDto = new OlimpDto(olimp);

        return { olimp: olimpDto }
    }

    async RegComandOnOlimp(command, olimp) {
        const olimpp = await OlimpModel.findOne({name: olimp})
        olimpp.teams.push(command);
        await olimpp.save();
    }

    async RegExerciseOnOlimp(exercise, olimp) {
        const olimpp = await OlimpModel.findOne({name: olimp})
        olimpp.exercise.push(exercise);
        await olimpp.save();
    }

    async RegJudgeOnOlimp(judge, olimp) {
        const olimpp = await OlimpModel.findOne({name: olimp})
        olimpp.judge.push(judge);
        await olimpp.save();
    }

    async getOlympByTeam(team) {
        const olimps = await OlimpModel.find({teams: team});
        return olimps;
    }
    
    async getOlympByCoordinator(coordinator) {
        const olimps = await OlimpModel.find({coordinator: coordinator});
        return olimps;
    }

    async getOlimpByJudge(judge) {
        const olimps = await OlimpModel.find({judge: judge});
        return olimps;
    }
    
}

module.exports = new OlimpService();