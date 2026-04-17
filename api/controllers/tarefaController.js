const tarefaService = require('../services/tarefaService');

class TarefaController {
    async create(req, res) {
        try {
            const tarefa = await tarefaService.create(req.body);
            res.status(201).json(tarefa);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async getAll(req, res) {
        try {
            const tarefas = await tarefaService.getAll();
            res.status(200).json(tarefas);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

module.exports = new TarefaController();