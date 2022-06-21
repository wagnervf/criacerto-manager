//Rota de simulacaoController


const express = require('express');
const routerMontaNatural= express.Router();
const montaNaturalController = require('../controllers/montaNatural.controllers');


//Salvar Dados Monta Natural
routerMontaNatural.post('/save', montaNaturalController.saveMontaNatural);




//Excluir Evento


//Buscar Evento
// routerMontaNatural.get('/find', montaNaturalController.getTiposSimulacoes);




module.exports = routerMontaNatural;