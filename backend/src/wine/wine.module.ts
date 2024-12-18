import { Module } from '@nestjs/common';
import { WineController } from './wine.controller';
import { WineService } from './wine.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [WineController],
  providers: [WineService],
  imports: [PrismaModule, CloudinaryModule],
  exports: [WineService]
})
export class WineModule {}
