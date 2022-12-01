const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateDadoUseCase {
  async execute({ nome, valor, isDano, sessaoId }) {

    let valorDadoRegex;

    const dados = await prisma.dado.findMany({
      where: {
        sessaoId
      }
    })

    if (dados.length == 15) {
      throw new AppError("Você só pode ter no máximo 15 dados customizados.")
    }

    if (nome == undefined || nome == '') {
      throw new AppError("Dados necessários não preenchidos.")
    } else {

      if (nome.length > 10) {
        throw new AppError("O nome do seu dado deve ter no máximo 10 caracteres.")
      }

      const dadoAlreadyExistsByName = await prisma.dado.findFirst({
        where: {
          nome
        }
      })

      if (dadoAlreadyExistsByName) {
        throw new AppError("Você já tem um dado com este nome.")
      }

    }

    if (valor == undefined || valor == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (isDano == undefined || isDano == null) {
      throw new AppError("Dados necessários não preenchidos.")
    }

    console.log(isDano)

    if (!isDano) {

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

    if (sessaoId != undefined && sessaoId != '') {
      const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
        where: {
          id: sessaoId,
        },
      });

      if (!sessaoIdAlreadyExists) {
        throw new AppError("Este ID de sessão não existe.");
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    const dado = await prisma.dado.create({
      data: {
        nome,
        valor,
        isDano,
        sessaoId,
      },
    });

    return dado;
  }
}

module.exports = CreateDadoUseCase;
