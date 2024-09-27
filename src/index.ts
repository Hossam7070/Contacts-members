import express, { Application } from 'express';
import sequelize from './database/db';
import contactRoutes from './routes/contactRoutes';

class Server {
  public app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeDatabase();
  }


  private initializeMiddleware() {
    this.app.use(express.json());
  }


  private initializeRoutes() {
    this.app.use('/contacts', contactRoutes);

    this.app.get('/', (req, res) => {
      res.send('Welcome to Contacts API!');
    });
  }

  private async initializeDatabase() {
    try {
      await sequelize.sync(); 
      console.log('Database connected and models synchronized.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

const server = new Server(3000);
server.start();
