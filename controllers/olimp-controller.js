const olimpService = require('../service/olimp-service');

class OlimpController{
    async registration_olimp(req, res, next) {
        try {
            const {name, subject, coordinator, first_date, last_date, judge, exercise, teams} = req.body;
            const olimpData = await olimpService.registration_olimp(name, subject, coordinator, first_date, last_date, judge, exercise, teams);
            return res.json(olimpData);
        } catch (e) {
            next(e);
        }
    }

    async RegComandOnOlimp(req, res, next) {
        try {
            const {command, olimp} = req.body;
            const olimpData = await olimpService.RegComandOnOlimp(command, olimp);
            return res.json(olimpData);
        } catch (e) {
            next(e);
        }
    }

    async RegExerciseOnOlimp(req, res, next) {
        try {
            const {exercise, olimp} = req.body;
            const olimpData = await olimpService.RegExerciseOnOlimp(exercise, olimp);
            return res.json(olimpData);
        } catch (e) {
            next(e);
        }
    }

    async RegJudgeOnOlimp(req, res, next) {
        try {
            const {judge, olimp} = req.body;
            const olimpData = await olimpService.RegJudgeOnOlimp(judge, olimp);
            return res.json(olimpData);
        } catch (e) {
            next(e);
        }
    }

    async getOlimpByTeam(req, res, next) {
        try {
            const {team} = req.body;
            const olimps = await olimpService.getOlympByTeam(team);
            return res.json(olimps);
        } catch (e) {
            next(e);
        }
    }
    
    async getOlimpByCoordinator(req, res, next) {
        try {
            const {coordinator} = req.body;
            const olimps = await olimpService.getOlympByCoordinator(coordinator);
            return res.json(olimps);
        } catch (e) {
            next(e);
        }
    }

    async getOlimpByJudge(req, res, next) {
        try {
            const {judge} = req.body;
            const olimps = await olimpService.getOlimpByJudge(judge);
            return res.json(olimps);
        } catch (e) {
            next(e);
        }
    }
    
}

module.exports = new OlimpController();