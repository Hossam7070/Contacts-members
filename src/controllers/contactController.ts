import { Request, Response } from 'express';
import { contactService } from '../services/contactService';

export class ContactController {
  public async getContacts(req: Request, res: Response): Promise<void> {
    try {
      const contacts = await contactService.getContacts();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve contacts', error });
    }
  }

  public async getContact(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const contact = await contactService.getContact(id);
      if (contact) {
        res.status(200).json(contact);
      } else {
        res.status(404).json({ message: `Contact with ID ${id} not found` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve contact', error });
    }
  }

  public async createContact(req: Request, res: Response): Promise<void> {
    try {
      const newContact = await contactService.createContact(req.body);
      res.status(201).json(newContact);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create contact', error });
    }
  }

  public async updateContact(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedContact = await contactService.updateContact(id, req.body);
      if (updatedContact) {
        res.status(200).json(updatedContact);
      } else {
        res.status(404).json({ message: `Contact with ID ${id} not found` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to update contact', error });
    }
  }

  public async deleteContact(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleted = await contactService.deleteContact(id);
      if (deleted) {
        res.status(200).json({ message: `Contact with ID ${id} deleted successfully` });
      } else {
        res.status(404).json({ message: `Contact with ID ${id} not found` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete contact', error });
    }
  }
}

export const contactController = new ContactController();
