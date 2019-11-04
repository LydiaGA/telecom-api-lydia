const bcrypt = require('bcrypt');
const User = require("../models/user");

exports.getOne = function getOne(query, cb){
    User.findOne(query, function(err, user){
        if(err){
            return cb(err);
        }

        cb(null, user);
    });
}

exports.create = function create(userData, cb){
    bcrypt.hash(userData.password, 10, function(err, hash){
        userData.password = hash;

        var userModel = new User(userData);
        userModel.save(userData, function(err, user){
            if(err){
                return cb(err);
            }

            cb(null, user);
        });
    });
}

exports.updateOne = function updateOne(query, data, cb){
    User.findOneAndUpdate(query, data, function(err, user){
        if(err){
            return cb(err);
        }

        cb(null, user);
    });
}

exports.deleteOne = function deleteOne(query, cb){
    User.findOneAndDelete(query, function(err, user){
        if(err){
            return cb(err);
        }

        cb(null, user);
    });
}

exports.search = function search(options, cb){
    User.find(option.filter, options.fields)
        .sort(options.sort)
        .limit(options.limit)
        .skip(options.limit * (options.page - 1))
        .exec(function(err, users){
            if(err){
                return cb(err);
            }

            cb(null, users);
        });
}