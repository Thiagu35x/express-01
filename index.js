const express = require('express');
const sequelize = require('./config/database');
const tarefaRoutes = require('./api/routes/tarefa');

const app = express();
app.use(express.json());

// Rota de Tarefas
app.use('/tarefas', tarefaRoutes);

// Sincronizar banco e ligar servidor
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
    console.log('Banco de dados conectado!');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.error('Erro ao conectar ao banco:', err));

module.exports = app; // Importante para a Vercel