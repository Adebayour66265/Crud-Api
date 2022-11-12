const express = require('express');

const qoutesController = require('../controllers/quote.controllers');

const routes = express.Router();

routes.get('/', qoutesController.getRandomQoute);

module.exports = routes;