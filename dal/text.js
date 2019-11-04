const Text = require("../models/text");

exports.getOne = function getOne(query, cb){
    Text.findOne(query, function(err, text){
        if(err){
            return cb(err);
        }

        cb(null, text);
    });
}

exports.create = function create(textData, cb){
    var textModel = new Text(textData);
    textModel.save(textData, function(err, text){
        if(err){
            return cb(err);
        }

        cb(null, text);
    });
}

exports.updateOne = function updateOne(query, data, cb){
    Text.findOneAndUpdate(query, data, function(err, text){
        if(err){
            return cb(err);
        }

        cb(null, text);
    });
}

exports.deleteOne = function deleteOne(query, cb){
    Text.findOneAndDelete(query, function(err, text){
        if(err){
            return cb(err);
        }

        cb(null, text);
    });
}

exports.search = function search(options, cb){
    Text.find(options.filter, options.fields)
        .sort(options.sort)
        .limit(options.limit)
        .skip(options.limit * (options.page - 1))
        .exec(function(err, texts){
            if(err){
                return cb(err);
            }

            cb(null, texts);
        });
}