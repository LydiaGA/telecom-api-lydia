const express = require('express');
const {check, validationResults} = require('express-validator');

const TextsController = require("../controllers/texts");
const checkAuth = require('../lib/check_auth');
const router = express.Router();

router.post('/', [
  check('sender').not().isEmpty().withMessage('Caller is Required'),
  check('receiver').not().isEmpty().withMessage('Receiver is Required'),
  check('message').not().isEmpty().withMessage('Message is Required')
], TextsController.saveText);

router.get('/:id', checkAuth, TextsController.getText)

router.put('/:id', checkAuth, TextsController.updateText);

router.delete('/:id', checkAuth, TextsController.deleteText);

router.get('/search', checkAuth, TextsController.search);

module.exports = router;