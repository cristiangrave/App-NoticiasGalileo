import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { NoticiasModule } from './noticias/noticias.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [UsersModule, ContactsModule, NoticiasModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),
    serveRoot: '/Backend/src/uploads'
  })],
})
export class AppModule {}
