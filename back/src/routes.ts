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


const router = express.Router();

router.post("/auth/register", validationBody(userSchema) , authController.register );

router.post("/auth/login", validationBody(loginSchema) , authController.login );

router.post("/auth/refresh-token", validationBody(refreshTokenSchema), refreshTokenController.refresh); 

router.post("/auth/request-reset-code", validationBody(requestResetCodeSchema), resetPasswordController.requestResetCode); 
router.post("/auth/reset-password", validationBody(resetPasswordSchema), resetPasswordController.resetPassword);

// Rotas de Reflorestamento - Criar: Apenas para Gestores (Visualizar não foi definida ainda)
router.post("/reflorestation", ensureAuth, ensureRole(['gestor']), validationBody(reflorestationSchema), reflorestationController.create ); 

// Rotas de Mudas - Criar: Apenas para Gestores (Visualizar não foi definida ainda)
router.post("/seedling", ensureAuth, ensureRole(['gestor']), validationBody(seedlingSchema), seedlingController.create );

// Rotas para Registros de Crescimento de Mudas
// Criar: Apenas para Gestores
router.post("/seedling-growth-records", ensureAuth, ensureRole(['gestor']), validationBody(seedlingGrowthRecordSchema), seedlingGrowthRecordController.create); 
// Visualizar: Para qualquer usuário autenticado
router.get("/seedling-growth-records", ensureAuth, seedlingGrowthRecordController.findAll); 

router.get("/seedling-growth-records/:seedlingId", ensureAuth, seedlingGrowthRecordController.findBySeedlingId); 
// Deletar: Apenas para Gestores
router.delete("/seedling-growth-records/:id", ensureAuth, ensureRole(['gestor']), seedlingGrowthRecordController.delete); 


export { router};
