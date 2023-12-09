const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const teamController = require('../controllers/team-controller');
const olimpController = require('../controllers/olimp-controller');
const replyController = require('../controllers/reply-controller');
const exerciseController = require('../controllers/exercise-controller');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration
);
router.post('/registration_team',
    body('name'),
    body('trainer'),
    body('members'),
    teamController.registration_team
);
router.post('/registration_olimp',
    body('name'),
    body('subject'),
    body('coordinator'),
    body('first_date'),
    body('last_date'),
    body('judge'),
    body('exercise'),
    body('teams'),
    olimpController.registration_olimp
);
router.post('/registration_exercise',
    body('name'),
    body('subject'),
    body('condition'),
    body('author'),
    body('answer'),
    body('olimp'),
    exerciseController.registration_exercise
);
router.post('/registration_reply',
    body('member'),
    body('olimp'),
    body('conditions'),
    body('author_answers'),
    body('answers'),
    body('marks'),
    replyController.registration_reply
);
router.post('/reg_comand_on_olimp', body('command'), body('olimp'), olimpController.RegComandOnOlimp);
router.post('/reg_exercise_on_olimp', body('exercise'), body('olimp'), olimpController.RegExerciseOnOlimp);
router.post('/add_mark_on_reply', body('mark'), body('olimp'), body('member'),replyController.AddMarkOnReply);
router.post('/check_reply', body('olimp'), body('member'),replyController.CheckReply);
router.post('/reg_judge_on_olimp', body('judge'), body('olimp'), olimpController.RegJudgeOnOlimp);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.post('/teams', body('trainer'), teamController.getTeamsByTrainer);
router.post('/teams_member', body('member'), teamController.getTeamsByMember);
router.post('/exercise_olimp', body('olimp'), exerciseController.getExerciseByOlimp);
router.post('/olimp_reply', body('olimp'), body('check'), replyController.getReplyByOlimp);
router.post('/olimp_member_reply', body('olimp'), body('member'), replyController.getReplyByOlimpMember);
router.get('/users', authMiddleware, userController.getUsers);
router.post('/team_olimp', body('team'), olimpController.getOlimpByTeam);
router.post('/judge_olimp', body('judge'), olimpController.getOlimpByJudge);
router.post('/coordinator_olimp', body('coordinator'), olimpController.getOlimpByCoordinator);
router.post('/set_role', body('email'), body('role'), userController.setRole);

module.exports = router