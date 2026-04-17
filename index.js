const express = require('express');
const app = express();

// O caminho precisa apontar para a pasta api onde estão suas rotas
const tarefaRoutes = require('./api/routes/tarefa'); 

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => res.send('Backend Online!'));

// Prefixo das rotas de tarefas
app.use('/tarefas', tarefaRoutes); 

module.exports = app;