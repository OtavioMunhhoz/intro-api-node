const express = require('express');
const router = express.Router();
const RotasController = require('../controllers/rotas');

router.get('/rotas', RotasController.listarRotas);

module.exports = router;