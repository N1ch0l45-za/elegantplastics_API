const express = require('express');
const controller = require("../controllers/ItemController");
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, controller.readAll);
router.get('/:barcode', authMiddleware, controller.readSingle);
router.put('/:barcode', authMiddleware, controller.update);
router.post('/', authMiddleware, controller.create);
router.delete('/:barcode', authMiddleware, controller.delete);

module.exports = router;