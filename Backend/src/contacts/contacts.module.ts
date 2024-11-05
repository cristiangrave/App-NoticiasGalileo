import { Module } from '@nestjs/common';
import { ContactsController } from './controllers/contacts.controller';
import { Contacto, ContactsService } from './services/contacts.service';
import { UploadService } from './services/upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from 'src/carreras/entities/carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contacto, Carrera])],
  controllers: [ContactsController],
  providers: [ContactsService, UploadService],
})
export class ContactsModule {}