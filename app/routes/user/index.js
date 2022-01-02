const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('../../validation/validation');
const controller = require('../../controllers/controller');


router.post('/register', signupValidation, controller.user_register);

router.post('/login', loginValidation, controller.user_login);

router.get('/user', signupValidation, controller.user_get_all_info);


module.exports = router;
