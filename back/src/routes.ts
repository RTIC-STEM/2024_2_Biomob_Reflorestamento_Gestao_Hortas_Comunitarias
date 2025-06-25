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
import { gardenPlotController } from "./controllers/gardenPlotController"; // Nova importação
import gardenPlotSchema from "./validation/gardenPlotSchema"; // Nova importação


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

// Rotas para Lotes de Horta
router.post("/garden-plots", ensureAuth, ensureRole(['gestor']), validationBody(gardenPlotSchema), gardenPlotController.create); // Criar: Apenas para Gestores
router.get("/garden-plots", ensureAuth, gardenPlotController.findAll); // Visualizar: Para qualquer usuário autenticado
router.get("/garden-plots/:id", ensureAuth, gardenPlotController.findById); // Visualizar por ID: Para qualquer usuário autenticado
router.get("/community-gardens/:gardenId/plots", ensureAuth, gardenPlotController.findByGardenId); // Visualizar lotes por ID da Horta: Para qualquer usuário autenticado
router.put("/garden-plots/:id", ensureAuth, ensureRole(['gestor']), validationBody(gardenPlotSchema), gardenPlotController.update); // Atualizar: Apenas para Gestores
router.delete("/garden-plots/:id", ensureAuth, ensureRole(['gestor']), gardenPlotController.delete); // Deletar: Apenas para Gestores


export { router};
