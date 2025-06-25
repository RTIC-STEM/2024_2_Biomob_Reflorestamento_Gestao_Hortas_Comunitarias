import { User } from './User';
import { RefreshToken } from './RefreshToken';
import { ResetCode } from './ResetCode';
import { ReflorestationAreas } from './ReflorestationAreas';
import Seedling from './Seedling';
import { SeedlingGrowthRecord } from './SeedlingGrowthRecord';
import { CommunityGarden } from './CommunityGarden';
import { GardenPlot } from './GardenPlot';
import { Event } from './Event';
import { EventParticipant } from './EventParticipant';
import { EducationalMaterial } from './EducationalMaterial';
import { News } from './News';
import { NewsCategory } from './NewsCategory';
import { NewsToCategory } from './NewsToCategory';
import { Tag } from './Tag';
import { NewsToTag } from './NewsToTag';
import { NewsComment } from './NewsComment';
import { NewsMedia } from './NewsMedia';

// --- Associações de Usuários ---
User.hasMany(RefreshToken, { foreignKey: 'userId', as: 'RefreshTokens' });
RefreshToken.belongsTo(User, { foreignKey: 'userId', as: 'User' });

User.hasMany(ResetCode, { foreignKey: 'userId', as: 'ResetCodes' });
ResetCode.belongsTo(User, { foreignKey: 'userId', as: 'User' });

// --- Associações de Reflorestamento ---
ReflorestationAreas.hasMany(Seedling, { foreignKey: 'reforestationAreaId', as: 'Seedlings' });
Seedling.belongsTo(ReflorestationAreas, { foreignKey: 'reforestationAreaId', as: 'ReflorestationArea' });

Seedling.hasMany(SeedlingGrowthRecord, { foreignKey: 'seedlingId', as: 'GrowthRecords' });
SeedlingGrowthRecord.belongsTo(Seedling, { foreignKey: 'seedlingId', as: 'Seedling' });

User.hasMany(SeedlingGrowthRecord, { foreignKey: 'recordedBy', as: 'RecordedGrowthRecords' });
SeedlingGrowthRecord.belongsTo(User, { foreignKey: 'recordedBy', as: 'RecordedBy' });

// --- Associações de Hortas Comunitárias ---
User.hasMany(CommunityGarden, { foreignKey: 'contactPerson', as: 'ContactGardens' }); // Quem é o contato da horta
CommunityGarden.belongsTo(User, { foreignKey: 'contactPerson', as: 'ContactPerson' });

CommunityGarden.hasMany(GardenPlot, { foreignKey: 'gardenId', as: 'GardenPlots' });
GardenPlot.belongsTo(CommunityGarden, { foreignKey: 'gardenId', as: 'Garden' });

User.hasMany(GardenPlot, { foreignKey: 'assignedTo', as: 'AssignedPlots' });
GardenPlot.belongsTo(User, { foreignKey: 'assignedTo', as: 'AssignedUser' });

// --- Associações de Eventos ---
User.hasMany(Event, { foreignKey: 'createdBy', as: 'CreatedEvents' });
Event.belongsTo(User, { foreignKey: 'createdBy', as: 'CreatedByUser' });

ReflorestationAreas.hasMany(Event, { foreignKey: 'reforestationAreaId', as: 'Events' });
Event.belongsTo(ReflorestationAreas, { foreignKey: 'reforestationAreaId', as: 'ReflorestationArea' });

CommunityGarden.hasMany(Event, { foreignKey: 'gardenId', as: 'Events' });
Event.belongsTo(CommunityGarden, { foreignKey: 'gardenId', as: 'Garden' });

Event.hasMany(EventParticipant, { foreignKey: 'eventId', as: 'Participants' });
EventParticipant.belongsTo(Event, { foreignKey: 'eventId', as: 'Event' });

User.hasMany(EventParticipant, { foreignKey: 'userId', as: 'EventParticipations' });
EventParticipant.belongsTo(User, { foreignKey: 'userId', as: 'User' });

// --- Associações de Materiais Educativos ---
User.hasMany(EducationalMaterial, { foreignKey: 'uploadedBy', as: 'UploadedMaterials' });
EducationalMaterial.belongsTo(User, { foreignKey: 'uploadedBy', as: 'UploadedBy' });

// --- Associações de Notícias ---
User.hasMany(News, { foreignKey: 'authorId', as: 'AuthoredNews' });
News.belongsTo(User, { foreignKey: 'authorId', as: 'Author' });

News.hasMany(NewsComment, { foreignKey: 'newsId', as: 'Comments' });
NewsComment.belongsTo(News, { foreignKey: 'newsId', as: 'News' });

User.hasMany(NewsComment, { foreignKey: 'userId', as: 'AuthoredComments' });
NewsComment.belongsTo(User, { foreignKey: 'userId', as: 'User' });

// Associação de Comentários Aninhados (Auto-referência)
NewsComment.hasMany(NewsComment, { foreignKey: 'parentCommentId', as: 'Replies' });
NewsComment.belongsTo(NewsComment, { foreignKey: 'parentCommentId', as: 'ParentComment' });

News.hasMany(NewsMedia, { foreignKey: 'newsId', as: 'Media' });
NewsMedia.belongsTo(News, { foreignKey: 'newsId', as: 'News' });

// Associações Muitos-para-Muitos para Notícias e Categorias
News.belongsToMany(NewsCategory, { through: NewsToCategory, foreignKey: 'newsId', otherKey: 'categoryId', as: 'Categories' });
NewsCategory.belongsToMany(News, { through: NewsToCategory, foreignKey: 'categoryId', otherKey: 'newsId', as: 'News' });
NewsToCategory.belongsTo(News, { foreignKey: 'newsId', as: 'News' });
NewsToCategory.belongsTo(NewsCategory, { foreignKey: 'categoryId', as: 'Category' });

// Associações Muitos-para-Muitos para Notícias e Tags
News.belongsToMany(Tag, { through: NewsToTag, foreignKey: 'newsId', otherKey: 'tagId', as: 'Tags' });
Tag.belongsToMany(News, { through: NewsToTag, foreignKey: 'tagId', otherKey: 'newsId', as: 'News' });
NewsToTag.belongsTo(News, { foreignKey: 'newsId', as: 'News' });
NewsToTag.belongsTo(Tag, { foreignKey: 'tagId', as: 'Tag' });

// Exportar os modelos (opcional, mas comum se precisar acessá-los via este arquivo)
export {
  User,
  RefreshToken,
  ResetCode,
  ReflorestationAreas,
  Seedling,
  SeedlingGrowthRecord,
  CommunityGarden,
  GardenPlot,
  Event,
  EventParticipant,
  EducationalMaterial,
  News,
  NewsCategory,
  NewsToCategory,
  Tag,
  NewsToTag,
  NewsComment,
  NewsMedia,
};

