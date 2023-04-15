const {Router} = require('express');
const AdocoesController = require('../controllers/AdocaoController')

const router = Router();

router.get('/adocoes', AdocoesController.listarAdocoes);
router.get('/adocoes/:id', AdocoesController.listarAdocaoPorId);
router.post('/adocoes', AdocoesController.criarAdocao);
router.put('/adocoes/:id', AdocoesController.atualizarAdocao);
router.delete('/adocoes/:id', AdocoesController.excluirAdocao);

module.exports = router;