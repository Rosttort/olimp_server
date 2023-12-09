const exerciseService = require('../service/exercise-service');

class ExerciseController{
    async registration_exercise(req, res, next) {
        try {
            const {name, subject, condition, author, answer, olimp} = req.body;
            const exerciseData = await exerciseService.registration_exercise(name, subject, condition, author, answer, olimp);
            return res.json(exerciseData);
        } catch (e) {
            next(e);
        }
    }

    async getExerciseByOlimp(req, res, next) {
        try {
            const {olimp} = req.body;
            const exercises = await exerciseService.getExerciseByOlimp(olimp);
            return res.json(exercises);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ExerciseController();