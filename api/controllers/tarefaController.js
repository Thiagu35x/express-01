const Tarefa = require('../models/tarefa');

// Buscar todas as tarefas
exports.getAll = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    return res.status(200).json(tarefas);
  } catch (error) {
    return res.status(500).json({ 
      message: 'Erro ao buscar tarefas', 
      error: error.message 
    });
  }
};

// Criar uma nova tarefa
exports.create = async (req, res) => {
  try {
    // Note o nome da variável: novaTarefa (com T maiúsculo)
    const novaTarefa = await Tarefa.create(req.body);
    return res.status(201).json(novaTarefa);
  } catch (error) {
    return res.status(500).json({ 
      message: 'Erro ao criar tarefa', 
      error: error.message 
    });
  }
};