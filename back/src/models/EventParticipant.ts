import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface EventParticipantAttributes {
  id: string;
  eventId: string; // Foreign Key to Events
  userId: string; // Foreign Key to Users
  status?: string; // e.g., 'registered', 'attended', 'cancelled'
  createdAt?: Date;
}

export interface EventParticipantCreationAttributes extends Optional<EventParticipantAttributes, 'id' | 'createdAt'> {}

export interface EventParticipantInstance extends Model<EventParticipantAttributes, EventParticipantCreationAttributes>, EventParticipantAttributes {}

export const EventParticipant = sequelize.define<EventParticipantInstance, EventParticipantAttributes>('EventParticipant', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  eventId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'EVENTS', 
      key: 'id',
    },
    onDelete: 'CASCADE', // Se o evento for deletado, a participação também
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'USERS', 
      key: 'id',
    },
  },
  status: {
    type: DataTypes.STRING(50),
    defaultValue: 'registered',
    allowNull: true, // Ou false, dependendo se o status inicial é sempre 'registered'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  tableName: 'EVENTS_PARTICIPANTS',
  timestamps: false, // Esta tabela não tem UPDATED_AT
  createdAt: 'created_at',
});

export default EventParticipant;
