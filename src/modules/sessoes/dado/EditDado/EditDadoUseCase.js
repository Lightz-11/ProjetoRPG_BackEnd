const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditDadoUseCase {
  async execute({ id, nome, valor, isDano }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.dado.findFirst({
      where: {
        id
      },
    });

    if (!data) {
      throw new AppError("Dado não existente.");
    }

    if (nome == null || nome == undefined || nome == "") {
      throw new AppError("Seu dado deve ter um nome.")
    } else {

      if (nome.length > 10) {
        throw new AppError("O nome do seu dado deve ter no máximo 10 caracteres.")
      }

      const dadoAlreadyExistsByName = await prisma.dado.findMany({
        where: {
          nome
        }
      })

      if (dadoAlreadyExistsByName.length == 1 && data.nome != nome) {
        throw new AppError("Você já tem um dado com este nome.")
      }

      data.nome = nome
    }

    if (valor == null || valor == undefined || valor == "") {
      throw new AppError("Seu dado deve ter um valor.")
    } else {
      data.valor = valor
    }

    if (isDano == null || isDano == undefined) {
      data.isDano = data.isDano
    } else {
      data.isDano = isDano
    }

    if (!data.isDano) {

      let valorDadoRegex;

      if (valor.includes("+")) {

        valorDadoRegex = /^[0-5]d[20]{2}\+[0-9]{1,2}$/

        const valorSomado = valor.split("+")

        if (valorSomado[1] > 20 || valorSomado[1] < 1) {
          throw new AppError("O valor de soma deve ser entre 1 e 20.")
        }

      } else {

        valorDadoRegex = /^[0-5]d[20]{2}$/

      }

      if (!valorDadoRegex.test(valor)) {
        throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
      }

    } else {

      const valorDadoDanoRegex = /^\d{1,2}d\d{1,2}$/

      if (valor.includes("+")) {
        const dadosDano = valor.split("+")
        dadosDano.forEach(dado => {
          if (dado.includes("d")) {
            if (!valorDadoDanoRegex.test(dado)) {
              throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
            }
            const dadoSeparado = dado.split("d")
            if (dadoSeparado[0] < 0 || dadoSeparado[0] > 10) {
              throw new AppError("A quantidade de um dado deve ser entre 1 e 10.")
            }
            if (dadoSeparado[1] < 2 || dadoSeparado[1] > 20) {
              throw new AppError("O valor de um dado deve ser entre 2 a 20.")
            }
          } else {
            if (dado == null || dado == undefined || dado == '') {
              throw new AppError("Você precisa colocar algum número depois do '+'.")
            }
            if (dado < 0 || dado > 25) {
              throw new AppError("O valor de soma deve ser entre 1 e 25.")
            }
          }
        });
      } else {

        if (!valorDadoDanoRegex.test(valor)) {
          throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
        }
        const dadoSeparado = valor.split("d")
        if (dadoSeparado[0] < 0 || dadoSeparado[0] > 10) {
          throw new AppError("A quantidade de um dado deve ser entre 1 e 10.")
        }
        if (dadoSeparado[1] < 2 || dadoSeparado[1] > 20) {
          throw new AppError("O valor de um dado deve ser entre 2 a 20.")
        }

      }

    }

    const dadoAtualizado = await prisma.dado.update({
      where: {
        id: data.id
      },
      data: data
    });

    return dadoAtualizado;
  }
}

module.exports = EditDadoUseCase;
