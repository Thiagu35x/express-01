const express = require('express');
const app = express();

// ESTA LINHA ABAIXO É A QUE ESTÁ FALTANDO NO SEU PRINT:
const tarefaRoutes = require('./api/routes/tarefa'); 

app.use(express.json());

// Rota para testar se a Vercel está lendo o arquivo
app.get('/', (req, res) => res.send('Servidor Online na Vercel!'));

app.use('/tarefas', tarefaRoutes);

module.exports = app;