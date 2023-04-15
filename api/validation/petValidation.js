function validarNovoPet(novoPet) {
  if (!novoPet.nome || !novoPet.idade || !novoPet.porte || !novoPet.temperamento || !novoPet.foto) {
    return { message: 'Preencha todos os campos obrigatórios.' };
  }

  return null;
}

module.exports = validarNovoPet;