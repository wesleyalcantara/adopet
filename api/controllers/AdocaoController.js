const database = require('../models')
const validarNovaAdocao = require('../validation/adocaoValidation')

class AdocaoController {

    static async listarAdocoes(req, res) {
        try {
            const adocoesListadas = await database.Adocoes.findAll();
            return res.status(200).json(adocoesListadas);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async listarAdocaoPorId(req, res) {
        try {
            const { id } = req.params;
            const adocaoEncontrado = await database.Adocoes.findByPk(id);

            if (!adocaoEncontrado) {
                return res.status(404).json({ message: 'Adocao não encontrado.' });
            }

            return res.status(200).json(adocaoEncontrado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async criarAdocao(req, res) {
        try {
            const novaAdocao = req.body;
    
            const erro = validarNovaAdocao(novaAdocao);
            if (erro) {
              return res.status(400).json(erro);
            }
    
            const novaAdocaoCriada = await database.Adocoes.create(novaAdocao);
            
            return res.status(201).json(novaAdocaoCriada);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }    

    static async atualizarAdocao(req, res) {
        try {
            const { id } = req.params;
            const adocaoAtualizado = req.body;

            const adocaoEncontrado = await database.Adocoes.findByPk(id);

            if (!adocaoEncontrado) {
                return res.status(404).json({ message: 'adocao não encontrada.' });
            }

            await adocaoEncontrado.update(adocaoAtualizado);
            return res.status(200).json(adocaoEncontrado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }

    static async excluirAdocao(req, res) {
        try {
            const { id } = req.params;
            const abrigo_id = req.user.id;

            const adocaoEncontrado = await database.Adocoes.findByPk(id);

            if (!adocaoEncontrado) {
                return res.status(404).json({ message: 'adocao não encontrada.' });
            }

            await adocaoEncontrado.destroy();

            return res.status(200).json({ message: 'adocao excluída com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    }
}

module.exports = AdocaoController