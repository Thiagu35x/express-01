const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/', tarefaController.create);
router.get('/', tarefaController.getAll);
router.get('/:objectId', tarefaController.getById);
router.put('/:objectId', tarefaController.update);
router.delete('/:objectId', tarefaController.delete);

module.exports = router;