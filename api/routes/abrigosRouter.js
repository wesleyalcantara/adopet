const {Router} = require('express');
const abrigosController = require('../controllers/AbrigoController')

const router = Router();

router.get('/abrigos', abrigosController.listarAbrigos);
router.get('/abrigos/:id', abrigosController.listarAbrigoPorId);
router.post('/abrigos', abrigosController.criarAbrigo);
router.put('/abrigos/:id', abrigosController.atualizarAbrigo);
router.delete('/abrigos/:id', abrigosController.excluirAbrigo);

module.exports = router;