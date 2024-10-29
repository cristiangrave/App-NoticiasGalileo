import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { NoticiasModule } from './noticias/noticias.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, ContactsModule, NoticiasModule, AuthModule],
})
export class AppModule {}
