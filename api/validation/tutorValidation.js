function validarNovoTutor(novoTutor) {
    if (!novoTutor.nome || !novoTutor.email || !novoTutor.senha) {
      return { message: 'Preencha todos os campos obrigatórios.' };
    }
  
    return null;
  }

  module.exports = validarNovoTutor;