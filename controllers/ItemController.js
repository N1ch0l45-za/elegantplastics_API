const Item = require("../models/itemModel");

exports.readAll = async (req, res, next) => {
    try {
        const [all] = await Item.readAll();
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
        const single = await Item.readSingle(req.params.barcode);
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
        const updateResponse = await Item.update(
            req.body.name,
            req.body.description,
            req.params.barcode
        );
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
        const deleteResponse = await Item.delete(req.params.barcode);
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
        const updateResponse = await Item.create(
            req.body.barcode,
            req.body.name,
            req.body.description
        );
        res.status(201).json(updateResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};