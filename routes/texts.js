const express = require('express');
const {check, validationResults} = require('express-validator');

const TextsController = require("../controllers/texts");
const checkAuth = require('../lib/check_auth');
const router = express.Router();

router.post('/', [
  check('receiver').not().isEmpty().withMessage('Receiver is Required'),
  check('message').not().isEmpty().withMessage('Message is Required')
], checkAuth, TextsController.saveText);

router.get('/search', checkAuth, TextsController.search);

router.get('/:id', checkAuth, TextsController.getText)

router.put('/:id', checkAuth, TextsController.updateText);

router.delete('/:id', checkAuth, TextsController.deleteText);


module.exports = router;