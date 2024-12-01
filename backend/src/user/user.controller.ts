import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createuser.dto';
import { IUser, UserService } from './user.service';
import { UpdateUserDto } from './dto/updateuser.dto';
import { User } from '@prisma/client';
import { GetUserDto } from './dto/getuser.dto';

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[] | undefined> {
    try {
      return await this.userService.getAllUsers()
    } catch (err) {
      return err
    }
  }

  @Post('/user')
  async getUser(@Body() body: GetUserDto): Promise<IUser | undefined> {
    return await this.userService.getUser(body)

  }

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User | undefined> {
    return await this.userService.createUser(body) 
  }
  
  
  @Put(':id')
  async updateUser(@Body() body: UpdateUserDto, @Param('id', ParseIntPipe) id: number ): Promise<User | undefined> {
    try {
      return await this.userService.updateUser(body, id)
    } catch (err) {
      return err.message
    }
  }  

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<User | undefined> {

    try {
      console.log('AQUI TRY')
      return await this.userService.deleteUser(id)
    } catch (err) {
      console.log('AQUI CATCH')
      return err.message
    }
  }
}
