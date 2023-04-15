const {Router} = require('express');
const PetController = require('../controllers/PetController.js')

const router = Router();

router.get('/pets/adocao', PetController.buscarPetsComAdocao);
router.get('/pets/adocao/:id', PetController.buscarPetPorAdocao);
router.get('/pets', PetController.listarPets);
router.get('/pets/:id', PetController.listarPetPorId);
router.post('/pets', PetController.criarPet);
router.put('/pets/:id', PetController.atualizarPet);
router.delete('/pets/:id', PetController.excluirPet);

module.exports = router;