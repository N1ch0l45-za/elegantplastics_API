const User = require("../models/userModel");
const bcrypt = require('bcryptjs');

exports.readAll = async (req, res, next) => {
    try {
        const [all] = await User.readAll();
        res.status(200).json(all);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.readSingle = async (req, res, next) => {
    try {
        const single = await User.readSingle(req.params.id);
        res.status(200).json(single[0][0]);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const updateResponse = await User.update(req.body.name, hashedPassword, req.body.role, req.params.id);
        res.status(200).json(updateResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deleteResponse = await User.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};