import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { NoticiasModule } from './noticias/noticias.module';
@Module({
  imports: [UsersModule, ContactsModule, NoticiasModule],
})
export class AppModule {}
