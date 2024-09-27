import { Router } from 'express';
import { contactController } from '../controllers/contactController';

class ContactRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', contactController.getContacts);         
    this.router.get('/:id', contactController.getContact); 
    this.router.post('/', contactController.createContact);     
    this.router.put('/:id', contactController.updateContact);   
    this.router.delete('/:id',contactController. deleteContact);
  }
}

export default new ContactRoutes().router;
