import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface NewsCommentAttributes {
  id: string;
  newsId: string; // Foreign Key to News
  userId: string; // Foreign Key to Users (comment author)
  parentCommentId?: string; // Foreign Key to NewsComments (for nested comments/replies)
  content: string;
  approved?: boolean; // For moderation
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NewsCommentCreationAttributes extends Optional<NewsCommentAttributes, 'id' | 'parentCommentId' | 'approved' | 'createdAt' | 'updatedAt'> {}

export interface NewsCommentInstance extends Model<NewsCommentAttributes, NewsCommentCreationAttributes>, NewsCommentAttributes {}

export const NewsComment = sequelize.define<NewsCommentInstance, NewsCommentAttributes>('NewsComment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  newsId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'NEWS',
      key: 'id',
    },
    onDelete: 'CASCADE', // Se a notícia for deletada, seus comentários também
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'USERS',
      key: 'id',
    },
  },
  parentCommentId: {
    type: DataTypes.UUID,
    allowNull: true, // Pode ser nulo para comentários de nível superior
    references: {
      model: 'NEWS_COMMENTS', // Auto-referência para comentários aninhados
      key: 'id',
    },
    onDelete: 'SET NULL', // Se o comentário pai for deletado, o filho não é deletado, apenas desvinculado
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  tableName: 'NEWS_COMMENTS',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default NewsComment;
