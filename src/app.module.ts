import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginAndSignUpModule } from './login-and-sign-up/login-and-sign-up.module';
import { LoginAndSignUp } from './login-and-sign-up/entities/login-and-sign-up.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
        type:'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database:  configService.get('DB_NAME'),
        entities: [LoginAndSignUp],
        synchronize :true,
      })
    }),
    LoginAndSignUpModule,
    // CitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
