const config = require('../config');

exports.getFilter = function getFilter(req){
    return req.query.filter ? JSON.parse(req.query.filter.trim()) : {};
}

exports.getFields = function getFields(req, defaultFields){
    return req.query.fields ? req.query.filter.split(',').join(' ') : defaultFields.join(' ');
}

exports.getPage = function getPage(req){
    return req.query.page ? parseInt(req.query.page) : 1;
}

exports.getLimit = function getLimit(req){
    return (req.query.limit != null && req.query.limit < config.MAX_PAGE_SIZE) ? parseInt(req.query.limit) : config.MAX_PAGE_SIZE;
}

exports.getSort = function getSort(req){
    return req.query.sort ? req.query.sort : config.DEFAULT_SORT;
}