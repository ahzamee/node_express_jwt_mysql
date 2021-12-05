const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('../validation/validation');
const { validationResult } = require('express-validator');
const controller = require('../controllers/controller')

router.post('/register', signupValidation, controller.register);

router.post('/login', loginValidation, controller.login);

router.get('/get-user', signupValidation, controller.get_all_info);


module.exports = router;
