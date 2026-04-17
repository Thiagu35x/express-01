const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefaController');

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:objectId', controller.getById);
router.put('/:objectId', controller.update);
router.delete('/:objectId', controller.delete);

module.exports = router;