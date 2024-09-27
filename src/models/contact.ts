import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'contacts',
  timestamps: true,
})
export class Contact extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  notes?: string;
}
