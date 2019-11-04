const express = require('express');
const {check, validationResults} = require('express-validator');

const UsersController = require("../controllers/users");
const checkAuth = require('../lib/check_auth');
const router = express.Router();

/**
 * @api {post} /users/signup  Create User
 * @apiName CreateUser
 *
 * @apiParam {String} name
 * @apiParam {String} phone_number
 * @apiParam {String} password 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 *    "name" : "User 1"
 * 		"phone_number": "00001",
 * 		"password": "1234",
 * 	 }
 *
 * @apiSuccess {String} _id  
 * @apiSuccess {String} name 
 * @apiSuccess {String} phone_number 
 * @apiSuccess {String} password
 * @apiSuccess {Date} date_created 
 * @apiSuccess {Date} date_modified 
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		 "_id": '5dbff75a17a0f60e402361b4',
 *    "name": "User 1"
 * 		"phone_number": "00001",
 *  	"password": "$2b$10$g9585.6JHFzK/oymuH90pujQ5jdDspGPQUpwlBX4/uIk8j4eLZ42q",
 * 		"date_created": 2019-11-04T10:03:06.108Z,
 * 		"date_modified": 2019-11-04T10:03:06.108Z,
 * 	 }
 *
 */
router.post('/signup', [
  check('name').not().isEmpty().withMessage('Name is Required'),
  check('phone_number').not().isEmpty().withMessage('Phone Number is Required'),
  check('password').not().isEmpty().withMessage('Password is Required'),
], UsersController.signup);

/**
 * @api {post} /users/login  Login
 * @apiName Login
 *
 * @apiParam {String} phone_number
 * @apiParam {String} password 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"phone_number": "00001",
 * 		"password": "1234",
 * 	 }
 *
 * @apiSuccess {String} _id  
 * @apiSuccess {String} name 
 * @apiSuccess {String} phone_number 
 * @apiSuccess {String} password
 * @apiSuccess {Date} date_created 
 * @apiSuccess {Date} date_modified 
 * @apiSuccess {String} token 
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 *    {
 *      "user" :  {
 * 		              "_id": '5dbff75a17a0f60e402361b4',
 *                  "name": "User 1"
 * 		              "phone_number": "00001",
 *  	              "password": "$2b$10$g9585.6JHFzK/oymuH90pujQ5jdDspGPQUpwlBX4/uIk8j4eLZ42q",
 * 		              "date_created": 2019-11-04T10:03:06.108Z,
 * 		              "date_modified": 2019-11-04T10:03:06.108Z,
 * 	              },
 *     "token" : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIwMDAwMSIsImlkIjoiNWRiZmY3NWExN2EwZjYwZTQwMjM2MWI0IiwiaWF0IjoxNTcyODY0NzIzLCJleHAiOjE1NzI5NTExMjN9.bNT6hxjGxlHAvQZrjeGeCend8sm8bIubEpAop4_Emm4
 * }
 * 	 
 *
 */
router.post('/login', [
  check('phone_number').not().isEmpty().withMessage('Phone Number is Required'),
  check('password').not().isEmpty().withMessage('Password is Required'),
], UsersController.login);

router.get('/search', checkAuth, UsersController.search);

/**
 * @api {put} /users/:id  Update User
 * @apiName Update User
 *
 * @apiParam {String} id 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"name": "User 1 Edited"
 * 	 }
 *
 * @apiSuccess {String} _id  
 * @apiSuccess {String} name 
 * @apiSuccess {String} phone_number 
 * @apiSuccess {String} password
 * @apiSuccess {Date} date_created 
 * @apiSuccess {Date} date_modified 
 *
 */
router.put('/:id', checkAuth, UsersController.updateUser);


/**
 * @api {put} /users/:id  Delete User
 * @apiName Delete User
 *
 * @apiParam {String} id 
 *
 *
 * @apiSuccess {String} _id  
 * @apiSuccess {String} name 
 * @apiSuccess {String} phone_number 
 * @apiSuccess {String} password
 * @apiSuccess {Date} date_created 
 * @apiSuccess {Date} date_modified 
 *
 */
router.delete('/:id', checkAuth, UsersController.deleteUser);

module.exports = router;
