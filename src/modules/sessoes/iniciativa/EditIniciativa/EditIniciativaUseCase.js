const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditIniciativaUseCase {
  async execute({ id, posicao, nome, iniciativa, dano }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const iniciativaData = await prisma.iniciativa.findFirst({
      where: {
        id,
      },
    });

    if (!iniciativaData) {
      throw new AppError("Iniciativa não existente.");
    }

    if (posicao == null || posicao == undefined || posicao == "") {
      iniciativaData.posicao = iniciativaData.posicao;
    } else {
      iniciativaData.posicao = Number(posicao);
    }

    if (nome == null || nome == undefined || nome == "") {
      iniciativaData.nome = iniciativaData.nome;
    } else {
      iniciativaData.nome = nome;
    }

    if (iniciativa == null || iniciativa == undefined || iniciativa == "") {
      iniciativaData.iniciativa = iniciativaData.iniciativa;
    } else {
      iniciativaData.iniciativa = Number(iniciativa);
    }

    if (dano == null || dano == undefined || dano == "") {
      iniciativaData.dano = iniciativaData.dano;
    } else {
      iniciativaData.dano = Number(dano);
    }

    const iniciativaAtualizada = await prisma.iniciativa.update({
      where: {
        id,
      },
      data: iniciativaData,
    });

    return iniciativaAtualizada;
  }
}

module.exports = EditIniciativaUseCase;
