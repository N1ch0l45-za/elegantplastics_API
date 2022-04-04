const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserModel = require('../models/userModel');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const result = await UserModel.create(req.body.name, req.body.email, hashedPassword, req.body.role);
        res.status(201).json({ message: 'user registerd!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.login = async (req, res, next) => {
    try {
        const user = await UserModel.find(req.body.email);
        if (user[0].length !== 1) {
            res.status(401).json({ message: 'A user with this email could not be found.' });
        }

        const storedUser = user[0][0];
        const isEqual = await bcrypt.compare(req.body.password, storedUser.password);

        if (!isEqual) {
            res.status(401).json({ message: 'Password is incorrect' });
        }

        const token = jwt.sign(
            {
                email: storedUser.email,
                userId: storedUser.id,
                role: storedUser.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '8h'
            }
        );
        res.status(200).json({ token: token, userId: storedUser.id, role: storedUser.role });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};