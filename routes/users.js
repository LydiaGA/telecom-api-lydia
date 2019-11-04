const express = require('express');
const {check, validationResults} = require('express-validator');

const UsersController = require("../controllers/users");
const checkAuth = require('../lib/check_auth');
const router = express.Router();

router.post('/signup', [
  check('name').not().isEmpty().withMessage('Name is Required'),
  check('phone_number').not().isEmpty().withMessage('Phone Number is Required'),
  check('password').not().isEmpty().withMessage('Password is Required'),
], UsersController.signup);

router.post('/login', [
  check('phone_number').not().isEmpty().withMessage('Phone Number is Required'),
  check('password').not().isEmpty().withMessage('Password is Required'),
], UsersController.login);

router.get('/search', checkAuth, UsersController.search);

router.put('/:id', checkAuth, UsersController.updateUser);

router.delete('/:id', checkAuth, UsersController.deleteUser);

module.exports = router;
