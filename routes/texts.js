const express = require('express');
const {check, validationResults} = require('express-validator');

const TextsController = require("../controllers/texts");
const checkAuth = require('../lib/check_auth');
const router = express.Router();

/**
 * @api {post} /texts/  Create Text
 * @apiName CreateText
 *
 * @apiParam {String} receiver 
 * @apiParam {String} message 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"receiver": "5dbffb1a8ebefa001775a453",
 *      "message" : "Hello"
 * 	 }
 *
 * @apiSuccess {String} _id  
 * @apiSuccess {String} sender 
 * @apiSuccess {String} receiver 
 * @apiSuccess {String} message 
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		 "_id": '5dc0070dae8f9700175a12e7',
 *      "caller": "5dbff75a17a0f60e402361b4"
 * 		"receiver": "5dbffb1a8ebefa001775a453",
 *      "message": "Hello"
 * 	 }
 *
 */
router.post('/', [
  check('receiver').not().isEmpty().withMessage('Receiver is Required'),
  check('message').not().isEmpty().withMessage('Message is Required')
], checkAuth, TextsController.saveText);

router.get('/search', checkAuth, TextsController.search);

/**
 * @api {get} /texts/:id  Get a Text
 * @apiName GetText
 *
 * @apiParam {String} id
 *
 *
 * @apiSuccess {String} _id  
 * @apiSuccess {String} sender 
 * @apiSuccess {String} receiver 
 * @apiSuccess {String} message 
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		"_id": '5dc0070dae8f9700175a12e7',
 *      "sender": "5dbff75a17a0f60e402361b4"
 * 		"receiver": "5dbffb1a8ebefa001775a453",
 *      "message" : "Hello"
 * 	 }
 *
 */
router.get('/:id', checkAuth, TextsController.getText)

router.put('/:id', checkAuth, TextsController.updateText);

router.delete('/:id', checkAuth, TextsController.deleteText);


module.exports = router;