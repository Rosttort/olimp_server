const ReplyModel = require('../models/reply-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const ReplyDto = require('../dtos/reply-dto');
const ApiError = require('../exceptions/api-error');
var mongoose = require('mongoose');

class ReplyService{
    async registration_reply(member, olimp, conditions, author_answers, answers, marks) {
        const check = false;
        const reply = await ReplyModel.create({member, olimp, conditions, author_answers, answers, marks, check})
        const replyDto = new ReplyDto(reply);

        return {reply: replyDto}
    }
    
    async getReplyByOlimp(olimp1, check1) {
        const reply = await ReplyModel.find({olimp: olimp1, check: check1});
        return reply;
    }

    async getReplyByOlimpMember(olimp1, member1) {
        const reply = await ReplyModel.find({olimp: olimp1, member: member1 });
        return reply;
    }

    async AddMarkOnReply(mark, olimp1, member1) {
        const reply = await ReplyModel.findOne({olimp: olimp1, member: member1})
        reply.marks.push(mark);
        await reply.save();
    }
    
    async CheckReply(olimp1, member1) {
        const reply = await ReplyModel.findOne({olimp: olimp1, member: member1})
        reply.check = true;
        await reply.save();
    }
}

module.exports = new ReplyService();