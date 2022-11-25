const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetFichaByUserIdUseCase {
  async execute({id}) {
    if (!id) {
      throw new AppError("ID não existente.")
    }

    const ficha = await prisma.ficha.findFirst({
      where: {
        userId: id,
      },
    });

    if (!ficha) {
      throw new AppError("Ficha não existente.")
    }

    return ficha;
  }
}

module.exports = GetFichaByUserIdUseCase;