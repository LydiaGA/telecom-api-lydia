const express = require('express');
const {check, validationResults} = require('express-validator');

const UsersController = require("../controllers/users");
const router = express.Router();

router.post('/signup', [
  check('name').not().isEmpty().withMessage('Name is Required'),
  check('phone_number').not().isEmpty().withMessage('Phone Number is Required'),
  check('password').not().isEmpty().withMessage('Password is Required'),
], UsersController.signup);

module.exports = router;
