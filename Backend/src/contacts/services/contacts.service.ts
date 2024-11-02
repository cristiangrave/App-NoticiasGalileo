import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from '../dtos/createContact.dto';
import { UpdateContactDto } from '../dtos/updateContact.dto';
import { Contacto } from '../entities/contacto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from 'src/carreras/entities/carrera.entity';

@Injectable()
export class ContactsService {
  constructor( 
    @InjectRepository(Contacto)
    private readonly contactoRepository: Repository<Contacto>,

    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  // Obtener todos los contactos
  async findAll(): Promise<Contacto[]> {
    return this.contactoRepository.find();
  }

  // Obtener un contacto por ID
  async findOne(idcontact: number): Promise<Contacto> {
    const contact = await this.contactoRepository.findOne({
      where: {idcontacto: idcontact},
    });

    if(!contact) {
      throw new NotFoundException(`contact con ID ${idcontact} no encontrada`);
    }

    return contact;
  }

   // Crear una contact nueva
   async create(createContactDto: CreateContactDto): Promise<Contacto> {
    // Obtener las entidades relacionadas de Categoria y Carrera
    const carrera = await this.carreraRepository.findOne({ where: { idcarrera: createContactDto.carrera } });

    if (!carrera) {
      throw new NotFoundException(`Carrera con ID ${createContactDto.carrera} no encontrada`);
    }

    // Crear y asignar los valores a la contact
    const newContact = this.contactoRepository.create({
      ...createContactDto, carrera: carrera
    });

    return this.contactoRepository.save(newContact);
  }

  // Editar un contacto existente
  async update(idcontact: number, updateContactDto: UpdateContactDto): Promise<Contacto>{
    const editContact = await this.findOne(idcontact);
    
    if (!editContact) {
      throw new NotFoundException(`contact con ID ${idcontact} no encontrada`);
    }

    // Obtener entidades actualizadas si es necesario
    if (updateContactDto.carrera) {
      const carrera = await this.carreraRepository.findOne({ where: { idcarrera: updateContactDto.carrera } });
      if (!carrera) {
        throw new NotFoundException(`Carrera con ID ${updateContactDto.carrera} no encontrada`);
      }
      editContact.carrera = carrera;
    }

    // Si encuentra el contacto con el ID y le Edita los datos
    Object.assign(editContact, updateContactDto);
    return await this.contactoRepository.save(editContact);
  }

}

export { Contacto }