const { Router } = require("express");
const fichasRouters = Router();

//Ficha

const CreateFichaController = require("../modules/fichas/ficha/CreateFicha/CreateFichaController");
const createFichaController = new CreateFichaController();

const CreateFichaNPCController = require("../modules/fichas/fichaNPC/CreateFichaNPC/CreateFichaNPCController");
const createFichaNPCController = new CreateFichaNPCController();

const CreateFichaNPCMonstroController = require("../modules/fichas/fichaNPCMonstro/CreateFichaNPCMonstro/CreateFichaNPCMonstroController");
const createFichaNPCMonstroController = new CreateFichaNPCMonstroController();

const CreateFichaNPCPrincipalController = require("../modules/fichas/ficha/CreateFichaNPCPrincipal/CreateFichaNPCPrincipalController");
const createFichaNPCPrincipalController = new CreateFichaNPCPrincipalController();

const EditFichaController = require("../modules/fichas/ficha/EditFicha/EditFichaController");
const editFichaController = new EditFichaController();

const EditFichaNPCController = require("../modules/fichas/fichaNPC/EditFichaNPC/EditFichaNPCController");
const editFichaNPCController = new EditFichaNPCController();

const EditFichaNPCStatusController = require("../modules/fichas/fichaNPC/EditFichaNPCStatus/EditFichaNPCStatusController");
const editFichaNPCStatusController = new EditFichaNPCStatusController();

const EditFichaNPCMonstroController = require("../modules/fichas/fichaNPCMonstro/EditFichaNPCMonstro/EditFichaNPCMonstroController");
const editFichaNPCMonstroController = new EditFichaNPCMonstroController();

const EditFichaNPCMonstroStatusController = require("../modules/fichas/fichaNPCMonstro/EditFichaNPCMonstroStatus/EditFichaNPCMonstroStatusController");
const editFichaNPCMonstroStatusController = new EditFichaNPCMonstroStatusController();

const GetFichaBySessaoIdController = require("../modules/fichas/ficha/GetFichaBySessaoId/GetFichaBySessaoIdController");
const getFichaControllerBySessaoId = new GetFichaBySessaoIdController();

const GetFichasNPCSBySessaoIdController = require("../modules/fichas/ficha/GetFichasNPCSBySessaoId/GetFichasNPCSBySessaoIdController");
const getFichasNPCSControllerBySessaoId = new GetFichasNPCSBySessaoIdController();

const GetFichaByUserIdController = require("../modules/fichas/ficha/GetFichaByUserId/GetFichaByUserIdController");
const getFichaControllerByUserId = new GetFichaByUserIdController();

const GetFichaByIdController = require("../modules/fichas/ficha/GetFichaById/GetFichaByIdController");
const getFichaByIdController = new GetFichaByIdController();

const GetFichaForImagemByIdController = require("../modules/fichas/ficha/GetFichaForImagemById/GetFichaForImagemByIdController");
const getFichaForImagemByIdController = new GetFichaForImagemByIdController();

const DeleteFichaController = require("../modules/fichas/ficha/DeleteFicha/DeleteFichaController");
const deleteFichaController = new DeleteFichaController();

const DeleteFichaNPCController = require("../modules/fichas/fichaNPC/DeleteFichaNPC/DeleteFichaNPCController");
const deleteFichaNPCController = new DeleteFichaNPCController();

const DeleteFichaNPCMonstroController = require("../modules/fichas/fichaNPCMonstro/DeleteFichaNPCMonstro/DeleteFichaNPCMonstroController");
const deleteFichaNPCMonstroController = new DeleteFichaNPCMonstroController();

fichasRouters.post("/", createFichaController.handle);
fichasRouters.post("/npc/", createFichaNPCController.handle);
fichasRouters.post("/npcprincipal/", createFichaNPCPrincipalController.handle);
fichasRouters.put("/npc/:id", editFichaNPCController.handle);
fichasRouters.put("/npc/status/:id", editFichaNPCStatusController.handle);
fichasRouters.post("/npcmonstro/", createFichaNPCMonstroController.handle);
fichasRouters.put("/npcmonstro/:id", editFichaNPCMonstroController.handle);
fichasRouters.put("/npcmonstro/status/:id", editFichaNPCMonstroStatusController.handle);
fichasRouters.put("/:id", editFichaController.handle);
fichasRouters.get("/npcs/:id", getFichasNPCSControllerBySessaoId.handle)
fichasRouters.get("/sessao/:id", getFichaControllerBySessaoId.handle);
fichasRouters.get("/user/:id", getFichaControllerByUserId.handle);
fichasRouters.get("/:id", getFichaByIdController.handle);
fichasRouters.get("/imagem/:id", getFichaForImagemByIdController.handle);
fichasRouters.delete("/:id", deleteFichaController.handle);
fichasRouters.delete("/npc/:id", deleteFichaNPCController.handle);
fichasRouters.delete("/npcmonstro/:id", deleteFichaNPCMonstroController.handle);

//Fim Ficha

//DADO

const CreateDadoController = require("../modules/fichas/dado/CreateDado/CreateDadoController");
const createDadoController = new CreateDadoController();

const DeleteDadoController = require("../modules/fichas/dado/DeleteDado/DeleteDadoController");
const deleteDadoController = new DeleteDadoController();

const GetDadoBySessaoIdController = require("../modules/fichas/dado/GetDadoBySessaoId/GetDadoBySessaoIdController");
const getDadoBySessaoIdController = new GetDadoBySessaoIdController();

const EditDadoController = require("../modules/fichas/dado/EditDado/EditDadoController");
const editDadoController = new EditDadoController();

fichasRouters.delete("/dado/:id", deleteDadoController.handle);
fichasRouters.post("/dado", createDadoController.handle);
fichasRouters.get("/dado/:id", getDadoBySessaoIdController.handle);
fichasRouters.put("/dado/:id", editDadoController.handle);

//FIM DADOss

//ITEM

const CreateItemController = require("../modules/fichas/item/CreateItem/CreateItemController");
const createItemController = new CreateItemController();

const EnviarItemController = require("../modules/fichas/item/EnviarItem/EnviarItemController");
const enviarItemController = new EnviarItemController();

const GetItensController = require("../modules/fichas/item/GetItens/GetItensController");
const getItensController = new GetItensController();

const DeleteItemController = require("../modules/fichas/item/DeleteItem/DeleteItemController");
const deleteItemController = new DeleteItemController();

const EditItemController = require("../modules/fichas/item/EditItem/EditItemController");
const editItemController = new EditItemController();

fichasRouters.post("/item", createItemController.handle);
fichasRouters.post("/item/enviar", enviarItemController.handle);
fichasRouters.get("/item/:id", getItensController.handle);
fichasRouters.delete("/item/:id", deleteItemController.handle);
fichasRouters.put("/item/:id", editItemController.handle);

//FIM ITEm

//ARMA

const CreateArmaController = require("../modules/fichas/arma/CreateArma/CreateArmaController");
const createArmaController = new CreateArmaController();

const EnviarArmaController = require("../modules/fichas/arma/EnviarArma/EnviarArmaController");
const enviarArmaController = new EnviarArmaController();

const GetArmasController = require("../modules/fichas/arma/GetArmas/GetArmasController");
const getArmasController = new GetArmasController();

const DeleteArmaController = require("../modules/fichas/arma/DeleteArma/DeleteArmaController");
const deleteArmaController = new DeleteArmaController();

const EditArmaController = require("../modules/fichas/arma/EditArma/EditArmaController");
const editArmaController = new EditArmaController();

fichasRouters.post("/arma", createArmaController.handle);
fichasRouters.post("/arma/enviar", enviarArmaController.handle);
fichasRouters.get("/arma/:id", getArmasController.handle);
fichasRouters.delete("/arma/:id", deleteArmaController.handle);
fichasRouters.put("/arma/:id", editArmaController.handle);

//FIM ARMA

//PRINCIPAL

const EditPrincipalController = require("../modules/fichas/principal/EditPrincipal/EditPrincipalController");
const editPrincipalController = new EditPrincipalController();

fichasRouters.put("/principal/:id", editPrincipalController.handle);

//FIM PRINCIPAL

//DEFESAS

const EditDefesasController = require("../modules/fichas/defesas/EditDefesas/EditDefesasController");
const editDefesasController = new EditDefesasController();

fichasRouters.put("/defesas/:id", editDefesasController.handle);

//FIM DEFESAS

//ATRIBUTOS

const EditAtributosController = require("../modules/fichas/atributos/EditAtributos/EditAtributosController");
const editAtributosController = new EditAtributosController();

fichasRouters.put("/atributos/:id", editAtributosController.handle);

//FIM ATRIBUTOS 

//PERSONAGEM

const EditPersonagemController = require("../modules/fichas/personagem/EditPersonagem/EditPersonagemController");
const editPersonagemController = new EditPersonagemController();

fichasRouters.put("/personagem/:id", editPersonagemController.handle);

//FIM PERSONAGEM

//HABILIDADE

const CreateHabilidadeController = require("../modules/fichas/habilidade/CreateHabilidade/CreateHabilidadeController");
const createHabilidadeController = new CreateHabilidadeController();

const DeleteHabilidadeController = require("../modules/fichas/habilidade/DeleteHabilidade/DeleteHabilidadeController");
const deleteHabilidadeController = new DeleteHabilidadeController();

const EditHabilidadeController = require("../modules/fichas/habilidade/EditHabilidade/EditHabilidadeController");
const editHabilidadeController = new EditHabilidadeController();

fichasRouters.put("/habilidade/:id", editHabilidadeController.handle);
fichasRouters.post("/habilidade", createHabilidadeController.handle);
fichasRouters.delete("/habilidade/:id", deleteHabilidadeController.handle);

//FIM HABILIDADE

//OUTROS

const CreateOutrosController = require("../modules/fichas/outros/CreateOutros/CreateOutrosController");
const createOutrosController = new CreateOutrosController();

fichasRouters.post("/outros", createOutrosController.handle);

//FIM OUTROS

//RITUAL

const CreateRitualController = require("../modules/fichas/ritual/CreateRitual/CreateRitualController");
const createRitualController = new CreateRitualController();

const DeleteRitualController = require("../modules/fichas/ritual/DeleteRitual/DeleteRitualController");
const deleteRitualController = new DeleteRitualController();

const EditRitualController = require("../modules/fichas/ritual/EditRitual/EditRitualController");
const editRitualController = new EditRitualController();

fichasRouters.put("/ritual/:id", editRitualController.handle);
fichasRouters.post("/ritual", createRitualController.handle);
fichasRouters.delete("/ritual/:id", deleteRitualController.handle);

//FIM RITUAL

//PODER

const CreatePoderController = require("../modules/fichas/poder/CreatePoder/CreatePoderController");
const createPoderController = new CreatePoderController();

const DeletePoderController = require("../modules/fichas/poder/DeletePoder/DeletePoderController");
const deletePoderController = new DeletePoderController();

const EditPoderController = require("../modules/fichas/poder/EditPoder/EditPoderController");
const editPoderController = new EditPoderController();

fichasRouters.put("/poder/:id", editPoderController.handle);
fichasRouters.post("/poder", createPoderController.handle);
fichasRouters.delete("/poder/:id", deletePoderController.handle);

//FIM PODER

//PROFICIENCIA

const CreateProficienciaController = require("../modules/fichas/proficiencia/CreateProficiencia/CreateProficienciaController");
const createProficienciaController = new CreateProficienciaController();

const DeleteProficienciaController = require("../modules/fichas/proficiencia/DeleteProficiencia/DeleteProficienciaController");
const deleteProficienciaController = new DeleteProficienciaController();

const EditProficienciaController = require("../modules/fichas/proficiencia/EditProficiencia/EditProficienciaController");
const editProficienciaController = new EditProficienciaController();

fichasRouters.put("/proficiencia/:id", editProficienciaController.handle);
fichasRouters.post("/proficiencia", createProficienciaController.handle);
fichasRouters.delete("/proficiencia/:id", deleteProficienciaController.handle);

//FIM PROFICIENCIA

//PERICIAS

const EditPericiasController = require("../modules/fichas/pericias/EditPericias/EditPericiasController");
const editPericiasController = new EditPericiasController();

fichasRouters.put("/pericias/:id", editPericiasController.handle);

//FIM PERICIAS

//PORTRAIT

const EditPortraitController = require("../modules/fichas/portrait/EditPortrait/EditPortraitController");
const editPortraitController = new EditPortraitController();

fichasRouters.put("/portrait/:id", editPortraitController.handle);

//FIM PORTRAIT

//STATUS

const EditStatusController = require("../modules/fichas/status/EditStatus/EditStatusController");
const { ficha } = require("../modules/database/prisma");
const editStatusController = new EditStatusController();

fichasRouters.put("/status/:id", editStatusController.handle);

//FIM STATUS

module.exports = fichasRouters;
