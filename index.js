const express = require('express');
const sequelize = require('./config/database');
const tarefaRoutes = require('./api/routes/tarefa');
require('dotenv').config();

const app = express();
app.use(express.json());

// Rota raiz para teste
app.get('/', (req, res) => {
    res.status(200).send('API de Tarefas rodando com sucesso!');
});

// Rotas da API
app.use('/tarefas', tarefaRoutes);

// Conexão com o Banco
sequelize.sync()
    .then(() => console.log('Banco de dados sincronizado'))
    .catch(err => console.error('Erro ao conectar ao banco:', err));

// Exportação obrigatória para a Vercel
module.exports = app;