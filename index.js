const express = require('express');
const app = express();

// ESTA LINHA ABAIXO DEVE ESTAR FALTANDO OU ERRADA:
const tarefaRoutes = require('./src/routes/tarefaRoutes'); 

app.use(express.json());

// Aqui é onde o erro acontece porque 'tarefaRoutes' não foi definido lá em cima
app.use('/tarefas', tarefaRoutes); 

module.exports = app;