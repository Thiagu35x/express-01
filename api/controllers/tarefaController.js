const service = require('../services/tarefaService');

exports.create = async (req, res) => {
    try {
        const nova = await service.criarTarefa(req.body);
        res.status(201).json(nova);
    } catch (e) {
        res.status(400).json({ error: "Descrição é obrigatória" });
    }
};

exports.getAll = async (req, res) => {
    const lista = await service.listarTarefas();
    res.json(lista);
};

exports.getById = async (req, res) => {
    const t = await service.buscarPorId(req.params.objectId);
    t ? res.json(t) : res.status(404).json({ error: "Tarefa não encontrada" });
};

exports.update = async (req, res) => {
    const atualizada = await service.atualizarTarefa(req.params.objectId, req.body);
    atualizada ? res.json(atualizada) : res.status(404).json({ error: "Tarefa não encontrada" });
};

exports.delete = async (req, res) => {
    const deletou = await service.deletarTarefa(req.params.objectId);
    deletou ? res.status(204).send() : res.status(404).json({ error: "Tarefa não encontrada" });
};