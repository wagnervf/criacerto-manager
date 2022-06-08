//Rota de simulacaoController


const express = require('express');
const routerEcow = express.Router();
const ecowController = require('../controllers/ecow.controllers');

// Salvar Envento
//routerSimulacao.post('/save', ecowController.saveTipoSimulacao);

//Editar Evento


//Excluir Evento


//Buscar Evento
routerEcow.get('/find', ecowController.getDados);

module.exports = routerEcow;