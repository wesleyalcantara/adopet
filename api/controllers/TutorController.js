const database = require('../models')
const validarNovoTutor = require('../validation/tutorValidation')
class TutorController {

    static async listarTutores(req, res) {
        try {
            const tutoresListados = await database.Tutores.findAll();
            return res.status(200).json(tutoresListados);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async listarTutorPorId(req, res) {
        try {
            const { id } = req.params;
            const tutorEncontrado = await database.Tutores.findByPk(id);

            if (!tutorEncontrado) {
                return res.status(404).json({ message: 'Tutor não encontrado.' });
            }

            return res.status(200).json(tutorEncontrado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async criarTutor(req, res) {
        try {
            const novoTutor = req.body;
    
            // Valida os dados do novo tutor
            const erro = validarNovoTutor(novoTutor);
            if (erro) {
              return res.status(400).json(erro);
            }
            
            if (!novoTutor.nome || !novoTutor.email || !novoTutor.senha) {
                return res.status(400).json({ message: 'Os campos nome, email e senha são obrigatórios.' });
            }
    
            const novoTutorCriado = await database.Tutores.create(novoTutor);
            
            return res.status(201).json(novoTutorCriado);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }    

    static async atualizarTutor(req, res) {
        try {
            const { id } = req.params;
            const tutorAtualizado = req.body;

            const tutorEncontrado = await database.Tutores.findByPk(id);

            if (!tutorEncontrado) {
                return res.status(404).json({ message: 'Tutor não encontrado.' });
            }

            await tutorEncontrado.update(tutorAtualizado);
            return res.status(200).json(tutorEncontrado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async excluirTutor(req, res) {
        try {
            const { id } = req.params;

            const tutorEncontrado = await database.Tutores.findByPk(id);

            if (!tutorEncontrado) {
                return res.status(404).json({ message: 'Tutor não encontrado.' });
            }

            await tutorEncontrado.destroy();

            return res.status(200).json({ message: 'Tutor excluído com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }
}

module.exports = TutorController