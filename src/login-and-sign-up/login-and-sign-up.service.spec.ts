import { Test, TestingModule } from '@nestjs/testing';
import { LoginAndSignUpService } from './login-and-sign-up.service';

describe('LoginAndSignUpService', () => {
  let service: LoginAndSignUpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginAndSignUpService],
    }).compile();

    service = module.get<LoginAndSignUpService>(LoginAndSignUpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
