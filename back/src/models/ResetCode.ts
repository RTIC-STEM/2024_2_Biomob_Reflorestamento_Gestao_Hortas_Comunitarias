import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface ResetCodeAttributes {
  id: string;
  userId: string;
  code: string;
  expiresAt: Date;
  used?: boolean;
  createdAt?: Date;
}

export interface ResetCodeCreationAttributes extends Optional<ResetCodeAttributes, 'id' | 'used' | 'createdAt'> {}

export interface ResetCodeInstance extends Model<ResetCodeAttributes, ResetCodeCreationAttributes>, ResetCodeAttributes {}

export const ResetCode = sequelize.define<ResetCodeInstance, ResetCodeAttributes>('ResetCode', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'USERS',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  code: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  used: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  tableName: 'RESET_CODES',
  timestamps: false, // Esta tabela não tem UPDATED_AT, então defini como false
  createdAt: 'created_at',
});

export default ResetCode;
