const DeliveryItem = require("../models/deliveryItemModel");

exports.readAll = async (req, res, next) => {
    try {
        const [all] = await DeliveryItem.readAllDeliveryItems(req.params.delivery_id);
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
        const single = await DeliveryItem.readSingle(req.params.id);
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
        const updateResponse = await DeliveryItem.update(
            req.body.delivery_id,
            req.body.item_barcode,
            req.body.quantity,
            req.params.id
        );
        res.status(200).json(updateResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deleteResponse = await DeliveryItem.delete(req.params.id);
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
        const createResponse = await DeliveryItem.create(
            req.body.delivery_id,
            req.body.item_barcode,
            req.body.quantity
        );
        res.status(201).json(createResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};