const express = require('express');
const {check, validationResults} = require('express-validator');

const CallsController = require("../controllers/calls");
const checkAuth = require('../lib/check_auth');
const router = express.Router();

router.post('/', [
  check('receiver').not().isEmpty().withMessage('Receiver is Required')
], checkAuth, CallsController.saveCall);

router.get('/search', checkAuth, CallsController.search);

router.get('/:id', checkAuth, CallsController.getCall)

router.put('/:id', checkAuth, CallsController.updateCall);

router.delete('/:id', checkAuth, CallsController.deleteCall);



module.exports = router;
