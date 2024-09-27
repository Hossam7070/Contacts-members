import { contactRepository } from '../repositories/contactRepository';
import { Contact } from '../models/contact';

export class ContactService {
  public async getContacts(): Promise<Contact[]> {
    return await contactRepository.findAll();
  }

  public async getContact(id: string): Promise<Contact | null> {
    return await contactRepository.findById(id);
  }

  public async createContact(contactData: Partial<Contact>): Promise<Contact> {
    return await contactRepository.create(contactData);
  }

  public async updateContact(id: string, contactData: Partial<Contact>): Promise<Contact | null> {
    const [affectedCount] = await contactRepository.update(id, contactData);
    if (affectedCount) {
      return await contactRepository.findById(id);
    }
    return null;
  }

  public async deleteContact(id: string): Promise<boolean> {
    const deleted = await contactRepository.delete(id);
    return deleted > 0;
  }
}

export const contactService = new ContactService();
