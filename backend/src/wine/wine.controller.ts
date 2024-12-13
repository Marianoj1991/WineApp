import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { WineService } from './wine.service';
import { Wine as WineModel } from '@prisma/client';
import { CreateWineDto } from './dto/createwine.dto';

@Controller('wine')
export class WineController {

  constructor ( private wineService: WineService) {}

  @Get()
  async getAllWines(): Promise<WineModel[] | undefined> {
    return this.wineService.getAllWines()    
  }
  
  @Get(':id')
  async getOneWine(@Param('id', ParseIntPipe) id: number): Promise<WineModel | undefined> {
    return this.wineService.getWine(id)
  }

  @Post()
  async createWine(@Body() body: CreateWineDto): Promise<WineModel | undefined> {
    return this.wineService.createWine(body)
  }

  @Put(':id')
  async putWine(@Body() body: WineModel, @Param('id', ParseIntPipe) id: number) {
    return this.wineService.updateWine(body, id)
  }

  @Delete(':id')
  async deleteWine(@Param('id', ParseIntPipe) id: number) {
    return this.wineService.deleteWine(id)
  }



}
