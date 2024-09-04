import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginAndSignUpService } from './login-and-sign-up.service';
import { CreateLoginAndSignUpDto } from './dto/create-login-and-sign-up.dto';
import { UpdateLoginAndSignUpDto } from './dto/update-login-and-sign-up.dto';

@Controller('login-and-sign-up')
export class LoginAndSignUpController {
  constructor(private readonly loginAndSignUpService: LoginAndSignUpService) {}

  @Post()
  create(@Body() createLoginAndSignUpDto: CreateLoginAndSignUpDto) {
    return this.loginAndSignUpService.create(createLoginAndSignUpDto);
  }

  @Get()
  findAll() {
    return this.loginAndSignUpService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.loginAndSignUpService.findOneByEmail(email);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateLoginAndSignUpDto: UpdateLoginAndSignUpDto) {
    return this.loginAndSignUpService.update(+email, updateLoginAndSignUpDto);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.loginAndSignUpService.remove(email);
  }
}
