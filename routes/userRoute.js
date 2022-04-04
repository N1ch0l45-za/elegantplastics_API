const express = require('express');
const controller = require("../controllers/userController");
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authMiddlewareAdmin = require('../middleware/authMiddlewareAdmin');

router.get('/', authMiddlewareAdmin, controller.readAll);
router.get('/:id', authMiddlewareAdmin, controller.readSingle);
router.put('/:id', authMiddlewareAdmin, controller.update);
router.delete('/:id', authMiddlewareAdmin, controller.delete);

module.exports = router;