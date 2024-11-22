import {
  ConflictException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createuser.dto';
import { GetUserDto } from './dto/getuser.dto';
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getAllUsers(): Promise<User[] | undefined> {
    try {
      const users = await this.prismaService.user.findMany();
      if (!users) {
        throw new HttpException('No se encontraron usuarios', 404);
      }

      // TODO: no devolver el password, desestructurarlo

      return users;
    } catch (err) {
      return err.message;
    }
  }

  async getUser(body: GetUserDto): Promise<User | undefined> {

      const user = await this.prismaService.user.findFirst({
        where: {
          email: body.email,
        },
      });

      if(!user) {
        throw new HttpException(`No user found with email: ${body.email}`, 404)        
      }

      return user

    // } catch(err) {
    //   throw new NotFoundException();
    // }


    // try {

    //   const user = await this.prismaService.user.findFirst({
    //     where: {
    //       email: body.email
    //     }
    //   })

    //   if(!user) {
    //     throw new HttpException('No se encontró el usuario', 404);
    //   }

    //   if(user?.password !== body.password) {
    //      throw new UnauthorizedException();
    //   }

    //   return user

    // } catch (err) {
    //   return err.message
    // }
  }

  async createUser(body: CreateUserDto): Promise<User | undefined> {
    try {
      const user = await this.prismaService.user.create({
        data: body,
      });

      return user;
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new ConflictException(`A user with email "${body.email}" already exists`);
      }
      throw new HttpException('An unexpected error ocurred', 500)
    }
  }

  async updateUser(data: object, id: number): Promise<User | undefined> {

    try {
      const user = await this.prismaService.user.update({
        data,
        where: {
          id,
        },
      });
       
      return user;
    } catch(err) {
      if (err.name === "PrismaClientKnownRequestError" && err.code === "P2025") {
        throw new ConflictException(
          `User with ID: ${id} not found`,
        ); 
      }

      throw new HttpException('An error occurred while updating the user', 500);
    }

  }

  async deleteUser(id: number): Promise<User | undefined> {

    try {
      const user = await this.prismaService.user.delete({
        where: {
          id,
        },
  
  
      });
      return user;
      
    } catch(err) {
      if (
        err.name === 'PrismaClientKnownRequestError' &&
        err.code === 'P2025'
      ) {
        throw new ConflictException(`User with ID: ${id} not found`);
      }

      throw new HttpException('An error occurred while updating the user', 500);
    }

  }
}
