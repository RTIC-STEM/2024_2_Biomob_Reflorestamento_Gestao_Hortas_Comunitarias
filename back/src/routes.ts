import express from "express";
import validationBody from "./middlewares/validateBody";
import loginSchema from "./validation/authSchema";
import userSchema from "./validation/userSchema";
import reflorestationSchema from "./validation/reflorestationSchema";
import { authController } from "./controllers/authController";
import { reflorestationController } from "./controllers/reflorestationController";
import { ensureAuth } from "./middlewares/auth";
import { seedlingController } from "./controllers/seedlingController";
import seedlingSchema from "./validation/seedlingSchema";
import { refreshTokenController } from "./controllers/refreshTokenController"; 
import refreshTokenSchema from "./validation/refreshTokenSchema"; 
import { resetPasswordController } from "./controllers/resetPasswordController";
import { requestResetCodeSchema, resetPasswordSchema } from "./validation/resetPasswordSchema";
import { seedlingGrowthRecordController } from "./controllers/seedlingGrowthRecordController";
import seedlingGrowthRecordSchema from "./validation/seedlingGrowthRecordSchema";
import { ensureRole } from "./middlewares/ensureRole";
import { communityGardenController } from "./controllers/communityGardenController"; 
import communityGardenSchema from "./validation/communityGardenSchema";
import { gardenPlotController } from "./controllers/gardenPlotController"; 
import gardenPlotSchema from "./validation/gardenPlotSchema";
import { eventController } from "./controllers/eventController"; 
import eventSchema from "./validation/eventSchema";
import { eventParticipantController } from "./controllers/eventParticipantController"; 
import eventParticipantSchema from "./validation/eventParticipantSchema";
import { educationalMaterialController } from "./controllers/educationalMaterialController"; // Nova importação
import educationalMaterialSchema from "./validation/educationalMaterialSchema"; // Nova importação


const router = express.Router();

router.post("/auth/register", validationBody(userSchema) , authController.register );

router.post("/auth/login", validationBody(loginSchema) , authController.login );

router.post("/auth/refresh-token", validationBody(refreshTokenSchema), refreshTokenController.refresh); 

router.post("/auth/request-reset-code", validationBody(requestResetCodeSchema), resetPasswordController.requestResetCode); 
router.post("/auth/reset-password", validationBody(resetPasswordSchema), resetPasswordController.resetPassword);

router.post("/reflorestation", ensureAuth, ensureRole(['gestor']), validationBody(reflorestationSchema), reflorestationController.create ); 

router.post("/seedling", ensureAuth, ensureRole(['gestor']), validationBody(seedlingSchema), seedlingController.create );

router.post("/seedling-growth-records", ensureAuth, ensureRole(['gestor']), validationBody(seedlingGrowthRecordSchema), seedlingGrowthRecordController.create); 
router.get("/seedling-growth-records", ensureAuth, seedlingGrowthRecordController.findAll); 
router.get("/seedling-growth-records/:seedlingId", ensureAuth, seedlingGrowthRecordController.findBySeedlingId); 
router.delete("/seedling-growth-records/:id", ensureAuth, ensureRole(['gestor']), seedlingGrowthRecordController.delete); 

router.post("/community-gardens", ensureAuth, ensureRole(['gestor']), validationBody(communityGardenSchema), communityGardenController.create); 
router.get("/community-gardens", ensureAuth, communityGardenController.findAll); 
router.get("/community-gardens/:id", ensureAuth, communityGardenController.findById); 
router.put("/community-gardens/:id", ensureAuth, ensureRole(['gestor']), validationBody(communityGardenSchema), communityGardenController.update); 
router.delete("/community-gardens/:id", ensureAuth, ensureRole(['gestor']), communityGardenController.delete); 

router.post("/garden-plots", ensureAuth, ensureRole(['gestor']), validationBody(gardenPlotSchema), gardenPlotController.create); 
router.get("/garden-plots", ensureAuth, gardenPlotController.findAll); 
router.get("/garden-plots/:id", ensureAuth, gardenPlotController.findById); 
router.get("/community-gardens/:gardenId/plots", ensureAuth, gardenPlotController.findByGardenId); 
router.put("/garden-plots/:id", ensureAuth, ensureRole(['gestor']), validationBody(gardenPlotSchema), gardenPlotController.update); 
router.delete("/garden-plots/:id", ensureAuth, ensureRole(['gestor']), gardenPlotController.delete); 

router.post("/events", ensureAuth, ensureRole(['gestor']), validationBody(eventSchema), eventController.create); 
router.get("/events", ensureAuth, eventController.findAll); 
router.get("/events/:id", ensureAuth, eventController.findById); 
router.put("/events/:id", ensureAuth, ensureRole(['gestor']), validationBody(eventSchema), eventController.update); 
router.delete("/events/:id", ensureAuth, ensureRole(['gestor']), eventController.delete); 

router.post("/events/:eventId/participants", ensureAuth, validationBody(eventParticipantSchema), eventParticipantController.register); 
router.get("/events/:eventId/participants", ensureAuth, eventParticipantController.findByEventId); 
router.get("/event-participants", ensureAuth, ensureRole(['gestor']), eventParticipantController.findAll); 
router.delete("/events/:eventId/participants/:userId", ensureAuth, eventParticipantController.cancel); 

// Rotas para Materiais Educativos
router.post("/educational-materials", ensureAuth, ensureRole(['gestor']), validationBody(educationalMaterialSchema), educationalMaterialController.create); // Criar: Apenas para Gestores
router.get("/educational-materials", ensureAuth, educationalMaterialController.findAll); // Visualizar: Qualquer usuário autenticado
router.get("/educational-materials/:id", ensureAuth, educationalMaterialController.findById); // Visualizar por ID: Qualquer usuário autenticado
router.put("/educational-materials/:id", ensureAuth, ensureRole(['gestor']), validationBody(educationalMaterialSchema), educationalMaterialController.update); // Atualizar: Apenas para Gestores
router.delete("/educational-materials/:id", ensureAuth, ensureRole(['gestor']), educationalMaterialController.delete); // Deletar: Apenas para Gestores
router.post("/educational-materials/:id/increment-download", ensureAuth, educationalMaterialController.incrementDownload); // Incrementar Download: Qualquer usuário autenticado

export { router};
