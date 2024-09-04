import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoginAndSignUpDto } from './dto/create-login-and-sign-up.dto';
import { UpdateLoginAndSignUpDto } from './dto/update-login-and-sign-up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginAndSignUp } from './entities/login-and-sign-up.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginAndSignUpService {
  constructor(@InjectRepository(LoginAndSignUp) private readonly loginandsignupRepository : Repository<LoginAndSignUp>){

  }
  async create(user:Partial<LoginAndSignUp>) {
    const User = await this.loginandsignupRepository.create(user);
    return await this.loginandsignupRepository.save(User);
  }

  async findAll() {
    return await this.loginandsignupRepository.find();
  }

  async findOneByEmail(email:string) {
    return await this.loginandsignupRepository.findOne({where:{email}});
  }

  async update(id: number, updateLoginAndSignUpDto: UpdateLoginAndSignUpDto) {
    const user = await this.findOneByEmail(email);
    if(!user){
      throw new NotFoundException;
    }
    Object.assign(user,updateLoginAndSignUpDto);
    return await this.loginandsignupRepository.save(user);
  }

  async remove(email: string) {
    const user = await this.findOneByEmail(email);
    if(!user){
      throw new NotFoundException;
    }
    return this.loginandsignupRepository.remove(user);
  }
}
