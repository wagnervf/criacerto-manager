//Rota de simulacaoController


const express = require('express');
const routerSimulacoes= express.Router();
const simulacoesController = require('../controllers/simulacoes.controllers');

// Salvar Envento
routerSimulacoes.post('/save', simulacoesController.saveTiposimulacoes);



//Excluir Evento


//Buscar Evento
// routerSimulacoes.get('/find', simulacoesController.getTiposSimulacoes);




module.exports = routerSimulacoes;