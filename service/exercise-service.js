const ExerciseModel = require('../models/exercise-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const ExerciseDto = require('../dtos/exercise-dto');
const ApiError = require('../exceptions/api-error');
var mongoose = require('mongoose');

class ExerciseService{
    async registration_exercise(name, subject, condition, author, answer, olimp) {
        const candidate = await ExerciseModel.findOne({name})
        if (candidate) {
            throw ApiError.BadRequest(`Задание с найзванием ${name} уже существует`)
        }

        const exercise = await ExerciseModel.create({name, subject, condition, author, answer, olimp})
        const exerciseDto = new ExerciseDto(exercise);

        return {exercise: exerciseDto}
    }

    async getExerciseByOlimp(olimp1) {
        const exercises = await ExerciseModel.find({olimp: olimp1});
        return exercises;
    }
}

module.exports = new ExerciseService();