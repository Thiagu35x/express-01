const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Define as rotas (O garçom que leva o pedido)
router.get('/', tarefaController.getAll);
router.post('/', tarefaController.create);

module.exports = router;