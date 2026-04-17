const express = require('express');
const router = express.Router();
// Importa o controlador que você acabou de me mostrar
const tarefaController = require('../controllers/tarefaController');

// Define as rotas (O '/' aqui vira '/tarefas' por causa do index.js)
router.post('/', tarefaController.create);
router.get('/', tarefaController.getAll);

module.exports = router;