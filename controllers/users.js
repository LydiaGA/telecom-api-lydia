const bcrypt = require('bcrypt');
const events = require('events');
const jwt = require('jsonwebtoken');
const {check , validationResult} = require('express-validator');

const searchOptions = require('../lib/search_options');
const config = require('../config');

const defaultFields = ['name', 'phone_number'];

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

exports.login = function login(req, res, next){
    var workflow = new events.EventEmitter();

    workflow.on('validate', function(){
        var validationErrors = validationResult(req);

        if(!validationErrors.isEmpty()){
            res.status(400);
            res.json(validationErrors.array())
        }

        workflow.emit('checkUser');
    });

    workflow.on('checkUser', function(){
        UserDal.getOne({phone_number : req.body.phone_number}, function(err, user){
            if(err){
                res.status(404);
                res.json({
                    error: "Phone Number Not Found"
                });
            }

            if(user){
                workflow.emit('checkPassword', user);
            }else{
                res.status(404);
                res.json({
                    error: "Phone Number Not Found"
                });
            }            
        });
    });

    workflow.on('checkPassword', function(user){
        bcrypt.compare(req.body.password, user.password, function(err, result){
            if(err){
                res.status(401);
                res.json({
                    error: "Incorrect Password"
                });
            }
            if(result){
                workflow.emit('login', user);
            }            
        });
    });

    workflow.on('login', function(user){
        const token = jwt.sign(
            {
                phone_number: user.phone_number,
                id : user.id
            }, 
            config.JWT_KEY,
            {
                expiresIn: "24h"
            }
        );

        res.status(200);
        res.json({
            user: user,
            token : token
        });
    });

    workflow.emit('validate');
}

exports.updateUser = function updateUser(req, res, next){
    UserDal.updateOne({_id : req.params.id}, req.body, function(err, user){
        if(err){
            next(err)
        }

        res.status(201);
        res.json(user);
    });
}

exports.deleteUser = function deleteUser(req, res, next){
    UserDal.deleteOne({_id : req.params.id}, function(err, user){
        if(err){
            next(err)
        }

        res.status(201);
        res.json(user);
    });
}

exports.search = function search(req, res, next){
    var workflow = new events.EventEmitter();

    req.query.filter = searchOptions.getFilter(req);
    req.query.fields = searchOptions.getFields(req, defaultFields);
    req.query.page = searchOptions.getPage(req);
    req.query.limit = searchOptions.getLimit(req);
    req.query.sort = searchOptions.getSort(req);

    workflow.on('validate', function validateSearchQuery() {

        let validationErrors = validationResult(req);
    
        if(!validationErrors.isEmpty()) {
          res.status(400);
          res.json(validationErrors.array());
        } else {
          workflow.emit('search');
        }
    });

    workflow.on('search', function(){
        var options = {
            filter: req.query.filter,
            fields: req.query.fields,
            sort: req.query.sort,
            limit: req.query.limit,
            page: req.query.page
        };

        UserDal.search(options, function (err, users) {
            if (err) {
                return next(err);
            }

            res.status(200);
            res.json(users);
        });
    });

    workflow.emit('validate');
}
