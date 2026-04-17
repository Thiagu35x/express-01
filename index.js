const express = require('express');
const app = express();

// IMPORTANTE: Esta linha liga o index.js ao seu arquivo de rotas
const tarefaRoutes = require('./api/routes/tarefa'); 

app.use(express.json());

// Rota de teste para confirmar que o servidor subiu
app.get('/', (req, res) => res.send('Servidor Online na Vercel!'));

// Ativa as rotas de tarefas no caminho /tarefas
app.use('/tarefas', tarefaRoutes);

module.exports = app;