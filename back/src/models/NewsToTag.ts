import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface NewsToTagAttributes {
  id: string;
  newsId: string; // Foreign Key to News
  tagId: string; // Foreign Key to Tags
  createdAt?: Date;
}

export interface NewsToTagCreationAttributes extends Optional<NewsToTagAttributes, 'id' | 'createdAt'> {}

export interface NewsToTagInstance extends Model<NewsToTagAttributes, NewsToTagCreationAttributes>, NewsToTagAttributes {}

export const NewsToTag = sequelize.define<NewsToTagInstance, NewsToTagAttributes>('NewsToTag', {
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
  tagId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'TAGS', 
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
  tableName: 'NEWS_TO_TAGS',
  timestamps: false, // Esta tabela não tem UPDATED_AT
  createdAt: 'created_at',
});

export default NewsToTag;
