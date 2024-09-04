import { Test, TestingModule } from '@nestjs/testing';
import { LoginAndSignUpController } from './login-and-sign-up.controller';
import { LoginAndSignUpService } from './login-and-sign-up.service';

describe('LoginAndSignUpController', () => {
  let controller: LoginAndSignUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginAndSignUpController],
      providers: [LoginAndSignUpService],
    }).compile();

    controller = module.get<LoginAndSignUpController>(LoginAndSignUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
