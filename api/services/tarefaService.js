const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/', tarefaController.create);
router.get('/', tarefaController.getAll);

module.exports = router;