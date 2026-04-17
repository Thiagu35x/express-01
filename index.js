const express = require('express');
const sequelize = require('./config/database');
const tarefaRoutes = require('./api/routes/tarefa');
require('dotenv').config();

const app = express();
app.use(express.json());

// Rota de teste para saber se está vivo
app.get('/', (req, res) => res.send('API de Tarefas Online!'));

// Rotas principais
app.use('/tarefas', tarefaRoutes);

// Sincronizar banco
sequelize.sync()
    .then(() => console.log('Banco conectado'))
    .catch(err => console.log('Erro no banco: ' + err));

// ESSENCIAL PARA VERCEL: Exportar o app
module.exports = app;