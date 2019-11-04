const bcrypt = require('bcrypt');
const events = require('events');
const {check , validationResult} = require('express-validator');

const UserDal = require('../dal/user');

exports.signup = function signup(req, res, next){
    var workflow = new events.EventEmitter();

    workflow.on('validate', function(){
        var validationErrors = validationResult(req);

        if(!validationErrors.isEmpty()){
            res.status(400);
            res.json(validationErrors.array())
        }

        workflow.emit('signup');
    });

    workflow.on('signup', function(){
        UserDal.create(req.body, function(err, user){
            if(err){
                next(err);
            }
            
            res.status(201);
            res.json(user);
        });
    });

    workflow.emit('validate');
}
