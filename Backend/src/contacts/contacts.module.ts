import { Module } from '@nestjs/common';
import { ContactsController } from './controllers/contacts.controller';
import { ContactsService } from './services/contacts.service';
import { UploadService } from './services/upload.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, UploadService],
})
export class ContactsModule {}
