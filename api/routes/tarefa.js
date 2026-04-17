const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefa');

router.get('/', tarefaController.getAll);
router.get('/:id', tarefaController.getById);
router.post('/', tarefaController.create);
router.put('/:id', tarefaController.update);
router.delete('/:id', tarefaController.remove);

module.exports = router;