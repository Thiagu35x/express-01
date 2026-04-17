const express = require('express');
require('dotenv').config();

// Tenta carregar o banco e as rotas
let sequelize;
let tarefaRoutes;
try {
    sequelize = require('./config/database');
    tarefaRoutes = require('./api/routes/tarefa');
} catch (e) {
    console.error("Erro ao carregar arquivos internos:", e.message);
}

const app = express();
app.use(express.json());

// Rota de teste (Abra essa rota primeiro no navegador)
app.get('/', (req, res) => {
    res.status(200).send('API está funcionando! Tente acessar /tarefas');
});

// Registrar rotas apenas se carregarem
if (tarefaRoutes) {
    app.use('/tarefas', tarefaRoutes);
}

// Conexão com o Banco (Não trava o servidor se falhar)
if (sequelize) {
    sequelize.sync()
        .then(() => console.log('Banco sincronizado'))
        .catch(err => console.error('Erro na conexão do banco:', err.message));
}

module.exports = app;
