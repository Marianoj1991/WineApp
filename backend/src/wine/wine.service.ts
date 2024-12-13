import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma, Wine } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWineDto } from './dto/createwine.dto';

@Injectable()
export class WineService {
  constructor(private prismaService: PrismaService) {}

  async getAllWines(): Promise<Wine[] | undefined> {
    return this.prismaService.wine.findMany();
  }

  async getWine(id: number): Promise<Wine | undefined> {
    return this.prismaService.wine.findUnique({
      where: {
        id,
      },
    });
  }

  async getWinesByUser(id: number): Promise<Wine[] | []> {
    try {
      const wines = await this.prismaService.wine.findMany({
        where: {
          userId: id,
        },
      });

      return wines;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new InternalServerErrorException(
          'A database error occurred while fetching wines.',
        );
      }

      throw new InternalServerErrorException(
        'An unexpected error occurred while fetching wines.',
      );
    }
  }

  async createWine(data: CreateWineDto): Promise<Wine | undefined> {

    try {
      console.log(data)
      return this.prismaService.wine.create({
        data,
      });
      
    } catch (err) {
      console.log('NEST ERROR')
      throw new HttpException('An unexpected error ocurred', 500);

    }
  }
  
  async updateWine(data: Wine, id: number): Promise<Wine | undefined> {
    return this.prismaService.wine.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteWine(id: number): Promise<Wine | undefined> {

    try {
      return this.prismaService.wine.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      if (err.code === 'P2025') {
        throw new Error('Wine not found or already deleted');
      }
      throw new HttpException('Wine not deleted, try again', HttpStatus.BAD_REQUEST)
    }
  }
}
