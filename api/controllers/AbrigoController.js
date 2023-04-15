const database = require('../models')
const validarNovoAbrigo = require('../validation/abrigoValidation')

class AbrigoController {

    static async listarAbrigos(req, res) {
        try {
            const abrigosListados = await database.Abrigos.findAll();
            return res.status(200).json(abrigosListados);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async listarAbrigoPorId(req, res) {
        try {
            const { id } = req.params;
            const abrigoEncontrado = await database.Abrigos.findByPk(id);

            if (!abrigoEncontrado) {
                return res.status(404).json({ message: 'Abrigo não encontrado.' });
            }

            return res.status(200).json(abrigoEncontrado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async criarAbrigo(req, res) {
        try {
            const novoAbrigo = req.body;
    
            // Valida os dados do novo Abrigo
            const erro = validarNovoAbrigo(novoAbrigo);
            if (erro) {
              return res.status(400).json(erro);
            }
            
            if (!novoAbrigo.nome || !novoAbrigo.local) {
                return res.status(400).json({ message: 'Os campos nome e local são obrigatórios.' });
            }
    
            const novoAbrigoCriado = await database.Abrigos.create(novoAbrigo);
            
            return res.status(201).json(novoAbrigoCriado);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }    

    static async atualizarAbrigo(req, res) {
        try {
            const { id } = req.params;
            const abrigoAtualizado = req.body;

            const abrigoEncontrado = await database.Abrigos.findByPk(id);

            if (!abrigoEncontrado) {
                return res.status(404).json({ message: 'Abrigo não encontrado.' });
            }

            await abrigoEncontrado.update(abrigoAtualizado);
            return res.status(200).json(abrigoEncontrado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async excluirAbrigo(req, res) {
        try {
            const { id } = req.params;

            const abrigoEncontrado = await database.Abrigos.findByPk(id);

            if (!abrigoEncontrado) {
                return res.status(404).json({ message: 'Abrigo não encontrado.' });
            }

            await abrigoEncontrado.destroy();

            return res.status(200).json({ message: 'Abrigo excluído com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }
}

module.exports = AbrigoController