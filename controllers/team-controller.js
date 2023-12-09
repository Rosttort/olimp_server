const teamService = require('../service/team-service');

class TeamController{
    async registration_team(req, res, next) {
        try {
            const {name, trainer, members} = req.body;
            const teamData = await teamService.registration_team(name, trainer, members);
            return res.json(teamData);
        } catch (e) {
            next(e);
        }
    }

    async getTeamsByTrainer(req, res, next) {
        try {
            const {trainer} = req.body;
            const teams = await teamService.getTeamsByTrainer(trainer);
            return res.json(teams);
        } catch (e) {
            next(e);
        }
    }

    async getTeamsByMember(req, res, next) {
        try {
            const {member} = req.body;
            const teams = await teamService.getTeamsByMember(member);
            return res.json(teams);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new TeamController();