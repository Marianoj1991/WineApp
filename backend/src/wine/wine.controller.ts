import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { WineService } from './wine.service';
import { Wine as WineModel } from '@prisma/client';
import { CreateWineDto } from './dto/createwine.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('wine')
export class WineController {
  constructor(private wineService: WineService) {}

  @Get()
  async getAllWines(): Promise<WineModel[] | undefined> {
    return this.wineService.getAllWines();
  }

  @Get(':id')
  async getOneWine(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WineModel | undefined> {
    return this.wineService.getWine(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createWine(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateWineDto,
  ): Promise<WineModel | undefined> {
     console.log('Archivo recibido:', file);
     console.log('Datos recibidos:', body);
    return this.wineService.createWine(body, file);
  }

  @Put(':id')
  async putWine(
    @Body() body: WineModel,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.wineService.updateWine(body, id);
  }

  @Delete(':id')
  async deleteWine(@Param('id', ParseIntPipe) id: number) {
    return this.wineService.deleteWine(id);
  }
}
