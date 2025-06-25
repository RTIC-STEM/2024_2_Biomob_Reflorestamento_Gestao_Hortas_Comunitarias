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
import { educationalMaterialController } from "./controllers/educationalMaterialController"; 
import educationalMaterialSchema from "./validation/educationalMaterialSchema";
import { newsController } from "./controllers/newsController"; 
import newsSchema from "./validation/newsSchema";
import { newsCategoryController } from "./controllers/newsCategoryController"; 
import newsCategorySchema from "./validation/newsCategorySchema";
import { newsToCategoryController } from "./controllers/newsToCategoryController"; 
import newsToCategorySchema from "./validation/newsToCategorySchema";
import { newsToTagController } from "./controllers/newsToTagController"; 
import newsToTagSchema from "./validation/newsToTagSchema";
import { tagController } from "./controllers/tagController"; 
import tagSchema from "./validation/tagSchema";
import { newsCommentController } from "./controllers/newsCommentController"; 
import newsCommentSchema from "./validation/newsCommentSchema";
import { newsMediaController } from "./controllers/newsMediaController"; // Nova importação
import newsMediaSchema from "./validation/newsMediaSchema"; // Nova importação


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

router.post("/educational-materials", ensureAuth, ensureRole(['gestor']), validationBody(educationalMaterialSchema), educationalMaterialController.create); 
router.get("/educational-materials", ensureAuth, educationalMaterialController.findAll); 
router.get("/educational-materials/:id", ensureAuth, educationalMaterialController.findById); 
router.put("/educational-materials/:id", ensureAuth, ensureRole(['gestor']), validationBody(educationalMaterialSchema), educationalMaterialController.update); 
router.delete("/educational-materials/:id", ensureAuth, ensureRole(['gestor']), educationalMaterialController.delete); 
router.post("/educational-materials/:id/increment-download", ensureAuth, educationalMaterialController.incrementDownload); 

router.post("/news", ensureAuth, ensureRole(['gestor']), validationBody(newsSchema), newsController.create); 
router.get("/news", ensureAuth, newsController.findAll); 
router.get("/news/:id", ensureAuth, newsController.findById); 
router.get("/news/slug/:slug", ensureAuth, newsController.findBySlug); 
router.put("/news/:id", ensureAuth, ensureRole(['gestor']), validationBody(newsSchema), newsController.update); 
router.delete("/news/:id", ensureAuth, ensureRole(['gestor']), newsController.delete); 

router.post("/news-categories", ensureAuth, ensureRole(['gestor']), validationBody(newsCategorySchema), newsCategoryController.create); 
router.get("/news-categories", ensureAuth, newsCategoryController.findAll); 
router.get("/news-categories/:id", ensureAuth, newsCategoryController.findById); 
router.get("/news-categories/slug/:slug", ensureAuth, newsCategoryController.findBySlug); 
router.put("/news-categories/:id", ensureAuth, ensureRole(['gestor']), validationBody(newsCategorySchema), newsCategoryController.update); 
router.delete("/news-categories/:id", ensureAuth, ensureRole(['gestor']), newsCategoryController.delete); 

router.post("/news/:newsId/categories/:categoryId", ensureAuth, ensureRole(['gestor']), validationBody(newsToCategorySchema), newsToCategoryController.create); 
router.get("/news-to-categories", ensureAuth, newsToCategoryController.findAll); 
router.get("/news/:newsId/categories", ensureAuth, newsToCategoryController.findByNewsId); 
router.get("/categories/:categoryId/news", ensureAuth, newsToCategoryController.findByCategoryId); 
router.delete("/news/:newsId/categories/:categoryId", ensureAuth, ensureRole(['gestor']), newsToCategoryController.remove); 

router.post("/tags", ensureAuth, ensureRole(['gestor']), validationBody(tagSchema), tagController.create); 
router.get("/tags", ensureAuth, tagController.findAll); 
router.get("/tags/:id", ensureAuth, tagController.findById); 
router.get("/tags/slug/:slug", ensureAuth, tagController.findBySlug); 
router.put("/tags/:id", ensureAuth, ensureRole(['gestor']), validationBody(tagSchema), tagController.update); 
router.delete("/tags/:id", ensureAuth, ensureRole(['gestor']), tagController.delete); 

router.post("/news/:newsId/tags/:tagId", ensureAuth, ensureRole(['gestor']), validationBody(newsToTagSchema), newsToTagController.create); 
router.get("/news-to-tags", ensureAuth, newsToTagController.findAll); 
router.get("/news/:newsId/tags", ensureAuth, newsToTagController.findByNewsId); 
router.get("/tags/:tagId/news", ensureAuth, newsToTagController.findByTagId); 
router.delete("/news/:newsId/tags/:tagId", ensureAuth, ensureRole(['gestor']), newsToTagController.remove); 

router.post("/news/:newsId/comments", ensureAuth, validationBody(newsCommentSchema), newsCommentController.create); 
router.get("/news/:newsId/comments", ensureAuth, newsCommentController.findByNewsId); 
router.get("/comments", ensureAuth, newsCommentController.findAll); 
router.get("/comments/:id", ensureAuth, newsCommentController.findById); 
router.put("/comments/:id", ensureAuth, newsCommentController.update); 
router.put("/comments/:id/approve", ensureAuth, newsCommentController.approve); 
router.delete("/comments/:id", ensureAuth, newsCommentController.delete); 

// Rotas para Mídias de Notícias
router.post("/news/:newsId/media", ensureAuth, ensureRole(['gestor']), validationBody(newsMediaSchema), newsMediaController.create); // Criar: Apenas para Gestores
router.get("/news/:newsId/media", ensureAuth, newsMediaController.findByNewsId); // Visualizar mídias de uma notícia: Qualquer usuário autenticado
router.get("/news-media", ensureAuth, newsMediaController.findAll); // Visualizar todas mídias: Qualquer usuário autenticado
router.get("/news-media/:id", ensureAuth, newsMediaController.findById); // Visualizar por ID: Qualquer usuário autenticado
router.put("/news-media/:id", ensureAuth, ensureRole(['gestor']), validationBody(newsMediaSchema), newsMediaController.update); // Atualizar: Apenas para Gestores
router.delete("/news-media/:id", ensureAuth, ensureRole(['gestor']), newsMediaController.delete); // Deletar: Apenas para Gestores


export { router};
