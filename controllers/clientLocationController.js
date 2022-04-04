const ClientLocation = require("../models/clientLocationModel");

exports.All = async (req, res, next) => {
    try {
        const [all] = await ClientLocation.readAll();
        res.status(200).json(all);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.readAll = async (req, res, next) => {
    try {
        const [all] = await ClientLocation.readAllClientLocations(req.params.client_id);
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
        const single = await ClientLocation.readSingle(req.params.id);
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
        const updateResponse = await ClientLocation.update(req.body.client_id, req.body.address, req.params.id);
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
        const deleteResponse = await ClientLocation.delete(req.params.id);
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
        const createResponse = await ClientLocation.create(req.body.client_id, req.body.address);
        res.status(201).json(createResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}