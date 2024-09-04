import { Module } from '@nestjs/common';
import { LoginAndSignUpService } from './login-and-sign-up.service';
import { LoginAndSignUpController } from './login-and-sign-up.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginAndSignUp } from './entities/login-and-sign-up.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LoginAndSignUp])],
  controllers: [LoginAndSignUpController],
  providers: [LoginAndSignUpService],
})
export class LoginAndSignUpModule {}
