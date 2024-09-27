import { Sequelize } from 'sequelize-typescript';
import { Contact } from '../models/contact';


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'your-username',
  password: 'your-password',
  database: 'your-database-name',
  models: [Contact], 
  logging: false,
});

export default sequelize;
