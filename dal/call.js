const Call = require("../models/call");

exports.getOne = function getOne(query, cb){
    Call.findOne(query, function(err, call){
        if(err){
            return cb(err);
        }

        cb(null, call);
    });
}

exports.create = function create(callData, cb){
    var callModel = new Call(callData);
    callModel.save(callData, function(err, call){
        if(err){
            return cb(err);
        }

        cb(null, call);
    });
}

exports.updateOne = function updateOne(query, data, cb){
    Call.findOneAndUpdate(query, data, function(err, call){
        if(err){
            return cb(err);
        }

        cb(null, call);
    });
}

exports.deleteOne = function deleteOne(query, cb){
    Call.findOneAndDelete(query, function(err, call){
        if(err){
            return cb(err);
        }

        cb(null, call);
    });
}

exports.search = function search(options, cb){
    Call.find(options.filter, options.fields)
        .sort(options.sort)
        .limit(options.limit)
        .skip(options.limit * (options.page - 1))
        .exec(function(err, calls){
            if(err){
                return cb(err);
            }

            cb(null, calls);
        });
}