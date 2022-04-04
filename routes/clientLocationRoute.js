const express = require('express');
const controller = require("../controllers/clientLocationController");
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, controller.All);
router.get('/:client_id', authMiddleware, controller.readAll);
router.get('/single/:id', authMiddleware, controller.readSingle);
router.put('/:id', authMiddleware, controller.update);
router.post('/', authMiddleware, controller.create);
router.delete('/:id', authMiddleware, controller.delete);

module.exports = router;