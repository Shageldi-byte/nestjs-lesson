import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async signIn(username: string, pass: string): Promise<any> {
    const user = {
      username,
      password: pass,
    };
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    let role = 'user';
    if(user.username.includes('admin')){
      role = 'admin';
    }
    const payload = { sub: user, username: user.username, role: role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
