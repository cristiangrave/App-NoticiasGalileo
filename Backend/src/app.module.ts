import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ContactsModule } from "./contacts/contacts.module";
import { NoticiasModule } from "./noticias/noticias.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "206.81.7.200",
      port: 5434,
      username: "admin",
      password: "GalileoG32024",
      database: "proyecto_galileo",
      entities: [__dirname + "/../**/*.entity.js"],
      synchronize: true,
    }),
    UsersModule,
    ContactsModule,
    NoticiasModule,
  ],
})
export class AppModule {}
