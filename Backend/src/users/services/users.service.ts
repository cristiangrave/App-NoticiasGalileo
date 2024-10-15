import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
 hellousers(): string {        
    return 'Hola mundo users!';
  } 
}
