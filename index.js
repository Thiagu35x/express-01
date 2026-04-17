const express = require('express');
const app = express();

// Puxando o arquivo de rotas que está dentro de api/routes/
const tarefaRoutes = require('./api/routes/tarefa'); 

app.use(express.json());

// Ativando as rotas de tarefas
app.use('/tarefas', tarefaRoutes); 

module.exports = app;