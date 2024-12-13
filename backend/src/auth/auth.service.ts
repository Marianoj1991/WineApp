import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { GetUserDto } from 'src/user/dto/getuser.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/createuser.dto';
import { WineService } from 'src/wine/wine.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private wineService: WineService,
    private jwtService: JwtService,
  ) {}

  async signIn(body: GetUserDto): Promise<{ access_token: string }> {
    const { id, ...user } = await this.userService.getUser(body);
    const wines = await this.wineService.getWinesByUser(id)
    const payload = {
      sub: id,
      ...user,
      wines: wines
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(body: CreateUserDto): Promise<{ access_token: string }> {
    const { id, ...user } = await this.userService.createUser(body);
    const wines = await this.wineService.getWinesByUser(id);
    const payload = {
      sub: id,
      ...user,
      wines
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
