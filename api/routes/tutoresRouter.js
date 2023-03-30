const {Router} = require('express');
const TutorController = require('../controllers/TutorController.js')

const router = Router();

router.get('/tutores', TutorController.listarTutores);
router.get('/tutores/:id', TutorController.listarTutorPorId);
router.post('/tutores', TutorController.criarTutor);
router.put('/tutores/:id', TutorController.atualizarTutor);
router.delete('/tutores/:id', TutorController.excluirTutor);

module.exports = router;