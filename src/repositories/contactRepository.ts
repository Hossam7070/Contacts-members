import { Contact } from '../models/contact';

export class ContactRepository {
  public async findAll(): Promise<Contact[]> {
    return await Contact.findAll();
  }

  public async findById(id: string): Promise<Contact | null> {
    return await Contact.findByPk(id);
  }

  public async create(contactData: Partial<Contact>): Promise<Contact> {
    return await Contact.create(contactData);
  }

  public async update(id: string, contactData: Partial<Contact>): Promise<[affectedCount: number]> {
    const contact = await Contact.findByPk(id);
    if (!contact) {
      throw new Error('Contact not found');
    }
    return await Contact.update(contactData, { where: { id } }); 
  }

  public async delete(id: string): Promise<number> {
    return await Contact.destroy({ where: { id } });
  }
}

export const contactRepository = new ContactRepository();
