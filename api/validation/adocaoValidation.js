function validarNovaAdocao(novaAdocao) {
    if (!novaAdocao.data || !novaAdocao.pet_id || !novaAdocao.tutor_id) {
      return { message: 'Preencha todos os campos obrigatórios.' };
    }
  
    return null;
  }

  module.exports = validarNovaAdocao;