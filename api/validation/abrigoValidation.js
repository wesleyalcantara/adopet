function validarNovoAbrigo(novoAbrigo) {
  if (!novoAbrigo.nome || !novoAbrigo.local) {
    return { message: 'Preencha todos os campos obrigatórios.' };
  }

  return null;
}

module.exports = validarNovoAbrigo;