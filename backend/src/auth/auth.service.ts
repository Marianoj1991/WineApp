import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { GetUserDto } from 'src/user/dto/getuser.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/createuser.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(body: GetUserDto): Promise<{ access_token: string }> {
    const { id, ...user } = await this.userService.getUser(body);
    const payload = {
      sub: id,
      ...user,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(body: CreateUserDto): Promise<{ access_token: string }> {
    const { id, ...user } = await this.userService.createUser(body);
    const payload = {
      sub: id,
      ...user,
    };

    console.log('PAYLOAD: ', payload)

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
