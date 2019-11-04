const events = require('events');
const {check , validationResult} = require('express-validator');

const searchOptions = require('../lib/search_options');
const config = require('../config');

const defaultFields = ['sender', 'receiver', 'message'];

const TextDal = require('../dal/text');

exports.saveText = function saveText(req, res, next){
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
        var sender = req.user.id;
        req.body.sender = sender;
        TextDal.create(req.body, function(err, text){
            if(err){
                next(err);
            }
            
            res.status(201);
            res.json(text);
        });
    });

    workflow.emit('validate');
}

exports.getText = function getText(req, res, next){
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
        TextDal.getOne({_id : req.params.id}, function(err, text){
            if(err){
                res.status(404);
                res.json({
                    error: "Call not Found"
                });
            }

            if(text){
                res.status(200);
                res.json(text);
            }            
        });
    });

    workflow.emit('validate');
}

exports.updateText = function updateText(req, res, next){
    TextDal.updateOne({_id : req.params.id}, req.body, function(err, text){
        if(err){
            next(err)
        }

        res.status(201);
        res.json(text);
    });
}

exports.deleteText = function deleteText(req, res, next){
    TextDal.deleteOne({_id : req.params.id}, function(err, text){
        if(err){
            next(err)
        }

        res.status(201);
        res.json(text);
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

        TextDal.search(options, function (err, texts) {
            if (err) {
                return next(err);
            }

            res.status(200);
            res.json(texts);
        });
    });

    workflow.emit('validate');
}
