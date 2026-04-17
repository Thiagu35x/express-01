const express = require('express');
const app = express();
// Importando as rotas da pasta api/routes
const tarefaRoutes = require('./api/routes/tarefa'); 

app.use(express.json());

// Rota para testar se a Vercel está lendo o arquivo
app.get('/', (req, res) => res.send('Servidor Online na Vercel!'));

app.use('/tarefas', tarefaRoutes);

module.exports = app;