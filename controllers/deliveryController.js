const Delivery = require("../models/deliveryModel");

exports.readAll = async (req, res, next) => {
    try {
        const [all] = await Delivery.readAll();
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
        const single = await Delivery.readSingle(req.params.id);
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
        const updateResponse = await Delivery.update(
            req.body.client_id,
            req.body.client_location_id,
            req.body.courier_id,
            req.body.packing_date,
            req.body.reference_num,
            req.body.del_type,
            req.body.collection_date,
            req.body.invoice_number,
            req.body.status,
            req.params.id
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
        const deleteResponse = await Delivery.delete(req.params.id);
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
        const createResponse = await Delivery.create(
            req.body.client_id,
            req.body.client_location_id,
            req.body.courier_id,
            req.body.packing_date,
            req.body.reference_num,
            req.body.del_type,
            req.body.collection_date,
            req.body.invoice_number,
            req.body.status,
        );
        res.status(201).json(createResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};