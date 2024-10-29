import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')// ruta "/users" http://localhost:3001/users
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

}
