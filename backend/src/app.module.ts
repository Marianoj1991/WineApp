import { Module } from '@nestjs/common';
import { WineModule } from './wine/wine.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [ WineModule, UserModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true
  }), CloudinaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

