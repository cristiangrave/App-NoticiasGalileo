import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string,): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user?.contrasena !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.idusuario, username: user.nombre, rol: user.tipousuario};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}