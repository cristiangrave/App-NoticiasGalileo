import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { NoticiasModule } from './noticias/noticias.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
        host: 'host',
        port: '3000',
        username: '---',
        password: '----',
        database: '----',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true
    }),
    UsersModule, ContactsModule, NoticiasModule],
})
export class AppModule {}
