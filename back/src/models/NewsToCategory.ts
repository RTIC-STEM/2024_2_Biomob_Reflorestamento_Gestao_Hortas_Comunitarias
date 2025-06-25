import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface NewsToCategoryAttributes {
  id: string;
  newsId: string; // Foreign Key to News
  categoryId: string; // Foreign Key to NewsCategory
  createdAt?: Date;
}

export interface NewsToCategoryCreationAttributes extends Optional<NewsToCategoryAttributes, 'id' | 'createdAt'> {}

export interface NewsToCategoryInstance extends Model<NewsToCategoryAttributes, NewsToCategoryCreationAttributes>, NewsToCategoryAttributes {}

export const NewsToCategory = sequelize.define<NewsToCategoryInstance, NewsToCategoryAttributes>('NewsToCategory', {
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
    onDelete: 'CASCADE', 
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'NEWS_CATEGORIES', 
      key: 'id',
    },
    onDelete: 'CASCADE', 
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  tableName: 'NEWS_TO_CATEGORIES',
  timestamps: false, // Esta tabela não tem UPDATED_AT
  createdAt: 'created_at',
});

export default NewsToCategory;
