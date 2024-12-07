import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserDto } from 'src/user/dto/getuser.dto';
import { CreateUserDto } from 'src/user/dto/createuser.dto';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body() user: GetUserDto) {
    return await this.authService.signIn(user);
  }

  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return await this.authService.register(user)
  }
}


