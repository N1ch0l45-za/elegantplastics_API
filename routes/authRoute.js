const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const authController = require('../controllers/authController');
const authMiddlewareAdmin = require('../middleware/authMiddlewareAdmin');
const UserModel = require('../models/userModel');

router.post(
    '/signup',
    [
        authMiddlewareAdmin,
        body('name').trim().not().isEmpty(),
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom(async (email) => {
                const user = await UserModel.find(email);
                if (user[0].length > 0) {
                    return Promise.reject('Email address already exist!');
                }
            })
            .normalizeEmail(),
        body('password').trim().isLength({ min: 7 }),
        body('role').trim(),

    ],
    authController.signup
);

router.post('/login', authController.login);

module.exports = router;

