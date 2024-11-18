import { Injectable } from '@nestjs/common';
import { Wine } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WineService {

  constructor (private prismaService: PrismaService) {}

  async getAllWines (): Promise<Wine[] | undefined> {
      return this.prismaService.wine.findMany()
  }

  async getWine(id: number): Promise<Wine | undefined> {
    return this.prismaService.wine.findUnique({
      where: {
        id
      }
    })
  }

  async postWine(data: Wine): Promise<Wine | undefined> {
    return this.prismaService.wine.create({
      data
    })
  }

  async updateWine (data: Wine, id: number): Promise<Wine | undefined> {
    return this.prismaService.wine.update({
      where: {
        id
      },
      data
    })
  }

  async deleteWine (id: number): Promise<Wine | undefined> {
    return this.prismaService.wine.delete({
      where: {
        id
      }
    })
  }

}
