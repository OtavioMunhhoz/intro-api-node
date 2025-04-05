const express = require('express');
const router = express.Router();


const RotasController = require('../controllers/rotas');
const CLientesController = require('../controllers/cliente');
const PedidosController = require('../controllers/pedido');

router.get('/rotas', RotasController.listarRotas);
router.post('/rotas', RotasController.cadastrarRotas);
router.patch('/rotas', RotasController.editarRotas);
router.delete('/rotas', RotasController.apagarRotas);

router.get('/cliente', CLientesController.listarClientes);
router.post('/cliente', CLientesController.cadastrarClientes);
router.patch('/cliente', CLientesController.editarClientes);
router.delete('/cliente', CLientesController.apagarClientes);

router.get('/pedido', PedidosController.listarPedidos);
router.post('/pedido', PedidosController.cadastrarPedidos);
router.patch('/pedido', PedidosController.editarPedidos);
router.delete('/pedido', PedidosController.apagarPedidos);

module.exports = router;