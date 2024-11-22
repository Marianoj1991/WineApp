import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { WineModule } from './wine/wine.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ WineModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

