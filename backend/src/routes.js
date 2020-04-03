const express = require('express');
const routes = express.Router();
const ongcontrole = require('./controles/ongcontrole');
const inciControler = require('./controles/inciControler');
const proControler = require('./controles/proControler');
const sesionControler = require('./controles/sesionControler');


routes.post('/sesion', sesionControler.create)

routes.get('/ongs', ongcontrole.index); 
routes.post('/ongs', ongcontrole.create);

routes.get('/proflie', proControler.index);

routes.get('/incidents', inciControler.index);
routes.post('/incidents', inciControler.create);
routes.delete('/incidente/:id', inciControler.delete);

module.exports = routes;