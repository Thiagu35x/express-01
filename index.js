const express = require('express');
const app = express();

// ESTA LINHA É A CHAVE: Ela importa as rotas da pasta api/routes
const tarefaRoutes = require('./api/routes/tarefa'); 

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => res.send('Servidor Online na Vercel!'));

// Ativa as rotas
app.use('/tarefas', tarefaRoutes);

module.exports = app;
