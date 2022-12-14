const EditItemUseCase = require("./EditItemUseCase");

class EditItemController {
  async handle(request, response) {
    const { nome, espaco, categoria, descricao, isMunicao, municao, municaoMax, imagem } = request.body;

    const { id } = request.params;
    const editItemUseCase = new EditItemUseCase();

    const data = await editItemUseCase.execute({
      id,
      nome,
      espaco,
      categoria,
      descricao,
      isMunicao,
      municao,
      municaoMax,
      imagem,
    });
    response.status(201).json(data);
  }
}

module.exports = EditItemController;
