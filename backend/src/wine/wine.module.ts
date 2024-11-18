import { Module } from '@nestjs/common';
import { WineController } from './wine.controller';
import { WineService } from './wine.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WineController],
  providers: [WineService],
  imports: [PrismaModule]
})
export class WineModule {}
