import {
  ConflictException,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createuser.dto';
import { GetUserDto } from './dto/getuser.dto';

export interface IUser {
  id: number 
  email: string 
  name: string 
  lastname: string
  username: string
}

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

  async getUser(body: GetUserDto): Promise<IUser | undefined> {
    let user: any;
    if (body.email) {
      user = await this.prismaService.user.findFirst({
        where: {
          email: body.email,
        },
      });
    } else {
      user = await this.prismaService.user.findFirst({
        where: {
          username: body.username,
        },
      });
    }

    if (!user) {
      throw new HttpException(`No user found with email: ${body.email}`, 404);
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Password incorrect');
    }

    const { password, ...returnUser } = user;

    return returnUser;
  }

  async createUser(body: CreateUserDto): Promise<User | undefined> {
    try {
      
      const { password, ...infoUser } = body
      
      const salt = await bcrypt.genSalt(10)

      const hash = await bcrypt.hash(password, salt)
      
      const user = await this.prismaService.user.create({
        data: {
          ...infoUser,
          password: hash,
        },
      });
      return user;

    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new ConflictException(
          `A user with email "${body.email}" or username provided already exists`,
        );
      }
      throw new HttpException('An unexpected error ocurred', 500);
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
    } catch (err) {
      if (
        err.name === 'PrismaClientKnownRequestError' &&
        err.code === 'P2025'
      ) {
        throw new ConflictException(`User with ID: ${id} not found`);
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
    } catch (err) {
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
