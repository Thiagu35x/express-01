// Procure onde está assim:
if (tarefaRoutes) {
    app.use('/tarefas', tarefaRoutes);
}

// E mude para ficar exatamente assim (removendo o 'if' para forçar o erro aparecer se falhar):
app.use('/tarefas', require('./api/routes/tarefa'));