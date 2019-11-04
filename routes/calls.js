const express = require('express');
const {check, validationResults} = require('express-validator');

const CallsController = require("../controllers/calls");
const checkAuth = require('../lib/check_auth');
const router = express.Router();

router.post('/', [
  check('caller').not().isEmpty().withMessage('Caller is Required'),
  check('receiver').not().isEmpty().withMessage('Receiver is Required')
], CallsController.saveCall);

router.get('/:id', checkAuth, CallsController.getCall)

router.put('/:id', checkAuth, CallsController.updateCall);

router.delete('/:id', checkAuth, CallsController.deleteCall);

router.get('/search', checkAuth, CallsController.search);

module.exports = router;
