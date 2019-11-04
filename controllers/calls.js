const events = require('events');
const {check , validationResult} = require('express-validator');

const searchOptions = require('../lib/search_options');
const config = require('../config');

const defaultFields = ['caller', 'receiver'];

const CallDal = require('../dal/call');

exports.saveCall = function saveCall(req, res, next){
    var workflow = new events.EventEmitter();

    workflow.on('validate', function(){
        var validationErrors = validationResult(req);

        if(!validationErrors.isEmpty()){
            res.status(400);
            res.json(validationErrors.array())
        }

        workflow.emit('save');
    });

    workflow.on('save', function(){
        var caller = req.user.id;
        req.body.caller = caller;
        CallDal.create(req.body, function(err, call){
            if(err){
                next(err);
            }
            
            res.status(201);
            res.json(call);
        });
    });

    workflow.emit('validate');
}

exports.getCall = function getCall(req, res, next){
    var workflow = new events.EventEmitter();

    workflow.on('validate', function(){
        var validationErrors = validationResult(req);

        if(!validationErrors.isEmpty()){
            res.status(400);
            res.json(validationErrors.array())
        }

        workflow.emit('get');
    });

    workflow.on('get', function(){
        CallDal.getOne({_id : req.params.id}, function(err, call){
            if(err){
                res.status(404);
                res.json({
                    error: "Call not Found"
                });
            }

            if(call){
                res.status(200);
                res.json(call);
            }            
        });
    });

    workflow.emit('validate');
}

exports.updateCall = function updateCall(req, res, next){
    CallDal.updateOne({_id : req.params.id}, req.body, function(err, call){
        if(err){
            next(err)
        }

        res.status(201);
        res.json(call);
    });
}

exports.deleteCall = function deleteCall(req, res, next){
    CallDal.deleteOne({_id : req.params.id}, function(err, call){
        if(err){
            next(err)
        }

        res.status(201);
        res.json(call);
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

        CallDal.search(options, function (err, calls) {
            if (err) {
                return next(err);
            }

            res.status(200);
            res.json(calls);
        });
    });

    workflow.emit('validate');
}
