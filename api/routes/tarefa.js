const express = require('express');
const router = express.Router();
// Importação do controlador
const tarefaController = require('../controllers/tarefaController');

// Define as rotas usando as funções exportadas no controller
router.get('/', tarefaController.getAll);
router.post('/', tarefaController.create);

module.exports = router;