const replyService = require('../service/reply-service');

class ReplyController{
    async registration_reply(req, res, next) {
        try {
            const {member, olimp, conditions, author_answers, answers, marks} = req.body;
            const replyData = await replyService.registration_reply(member, olimp, conditions, author_answers, answers, marks);
            return res.json(replyData);
        } catch (e) {
            next(e);
        }
    }

    async getReplyByOlimp(req, res, next) {
        try {
            const {olimp, check} = req.body;
            const reply = await replyService.getReplyByOlimp(olimp, check);
            return res.json(reply);
        } catch (e) {
            next(e);
        }
    }
    
    async getReplyByOlimpMember(req, res, next) {
        try {
            const {olimp, member} = req.body;
            const reply = await replyService.getReplyByOlimpMember(olimp, member);
            return res.json(reply);
        } catch (e) {
            next(e);
        }
    }

    async AddMarkOnReply(req, res, next) {
        try {
            const {mark, olimp, member} = req.body;
            const replyData = await replyService.AddMarkOnReply(mark, olimp, member);
            return res.json(replyData);
        } catch (e) {
            next(e);
        }
    }

    async CheckReply(req, res, next) {
        try {
            const {olimp, member} = req.body;
            const replyData = await replyService.CheckReply(olimp, member);
            return res.json(replyData);
        } catch (e) {
            next(e);
        }
    }
    
}

module.exports = new ReplyController();