const express = require('express');
const {check, validationResults} = require('express-validator');

const CallsController = require("../controllers/calls");
const checkAuth = require('../lib/check_auth');
const router = express.Router();

/**
 * @api {post} /calls/  Create Call
 * @apiName CreateCall
 *
 * @apiParam {String} receiver 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"receiver": "5dbffb1a8ebefa001775a453",
 * 	 }
 *
 * @apiSuccess {String} _id  
 * @apiSuccess {String} sender 
 * @apiSuccess {String} receiver 
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		 "_id": '5dc0070dae8f9700175a12e7',
 *      "caller": "5dbff75a17a0f60e402361b4"
 * 		"receiver": "5dbffb1a8ebefa001775a453"
 * 	 }
 *
 */
router.post('/', [
  check('receiver').not().isEmpty().withMessage('Receiver is Required')
], checkAuth, CallsController.saveCall);

router.get('/search', checkAuth, CallsController.search);

/**
 * @api {get} /calls/:id  Get a Call
 * @apiName GetCall
 *
 * @apiParam {String} id
 *
 *
 * @apiSuccess {String} _id  
 * @apiSuccess {String} caller 
 * @apiSuccess {String} receiver 
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		"_id": '5dc0070dae8f9700175a12e7',
 *      "caller": "5dbff75a17a0f60e402361b4"
 * 		"receiver": "5dbffb1a8ebefa001775a453"
 * 	 }
 *
 */
router.get('/:id', checkAuth, CallsController.getCall)

router.put('/:id', checkAuth, CallsController.updateCall);

router.delete('/:id', checkAuth, CallsController.deleteCall);



module.exports = router;
