const database = require('../models')
const { Op } = require('sequelize');
const validarNovoPet = require('../validation/petValidation')
const { Adocoes } = require('../models');

class PetController {

    static async listarPets(req, res) {
        try {
            const petsListados = await database.Pets.findAll();
            return res.status(200).json(petsListados);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async listarPetPorId(req, res) {
        try {
            const { id } = req.params;
            const petEncontrado = await database.Pets.findByPk(id);

            if (!petEncontrado) {
                return res.status(404).json({ message: 'Pet não encontrado.' });
            }

            return res.status(200).json(petEncontrado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async criarPet(req, res) {
        try {
            const novoPet = req.body;
    
            const erro = validarNovoPet(novoPet);
            if (erro) {
              return res.status(400).json(erro);
            }
    
            const novoPetCriado = await database.Pets.create(novoPet);
            
            return res.status(201).json(novoPetCriado);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }    

    static async atualizarPet(req, res) {
        try {
            const { id } = req.params;
            const petAtualizado = req.body;

            const petEncontrado = await database.Pets.findByPk(id);

            if (!petEncontrado) {
                return res.status(404).json({ message: 'Pet não encontrado.' });
            }

            await petEncontrado.update(petAtualizado);
            return res.status(200).json(petEncontrado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async excluirPet(req, res) {
        try {
            const { id } = req.params;

            const petEncontrado = await database.Pets.findByPk(id);

            if (!petEncontrado) {
                return res.status(404).json({ message: 'Pet não encontrado.' });
            }

            await petEncontrado.destroy();

            return res.status(200).json({ message: 'Pet excluído com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async buscarPetsDisponiveis(req, res) {
        try {
            const petsDisponiveis = await database.Pets.findAll({
                where: {
                    adocao_id: {
                        [Op.is]: null,
                    },
                },
                include: [{ model: Adocoes }],
            });
            return res.status(200).json(petsDisponiveis);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async buscarPetsComAdocao(req, res) {
        try {
            const petsComAdocao = await database.Pets.findAll({
                where: {
                    adocao_id: {
                        [Op.ne]: null,
                    },
                },
                include: [{ model: Adocoes }],
            });
            return res.status(200).json(petsComAdocao);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async buscarPetPorAdocao(req, res) {
        try {
            const { id } = req.params;
            const petComAdocao = await database.Pets.findOne({
                where: { adocao_id: id },
                include: [{ model: Adocoes }],
            });
            return res.status(200).json(petComAdocao);
        } catch (error) {
                return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }
}

module.exports = PetController