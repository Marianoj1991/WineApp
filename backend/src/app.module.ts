import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { WineModule } from './wine/wine.module';

@Module({
  imports: [WineModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
