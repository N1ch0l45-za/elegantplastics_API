const Client = require("../models/clientModel");

exports.readAll = async (req, res, next) => {
    try {
        const [all] = await Client.readAll();
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
        const single = await Client.readSingle(req.params.id);
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
        const updateResponse = await Client.update(req.body.name, req.body.address, req.params.id);
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
        const deleteResponse = await Client.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.create = async (req, res, next) => {
    try {
        const createResponse = await Client.create(req.body.name, req.body.address)
        res.status(201).json(createResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}