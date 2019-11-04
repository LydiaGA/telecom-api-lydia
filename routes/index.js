const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const textsRouter = require('./texts');
const callsRouter = require('./calls');

module.exports = function(app){
  app.use('/users', usersRouter);
  app.use('/texts', textsRouter);
  app.use('/calls', callsRouter);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

