import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginAndSignUp } from "src/login-and-sign-up/entities/login-and-sign-up.entity";
import { LoginAndSignUpService } from "src/login-and-sign-up/login-and-sign-up.service";
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AuthService{
    constructor(
        private readonly loginAndSignUpService:LoginAndSignUpService,
        private readonly jwtService:JwtService,
    ){}
    async validateLoginandSignup(email:string,pass:string):Promise<any>{
        const user = await this.loginAndSignUpService.findOneByEmail(email);
        if(user&& await bcrypt.compare(pass,user.password)){
            const {password, ...result}=user;
            return result;
        }
    }
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.loginAndSignUpService.findOneByEmail(email);
        if (user && await bcrypt.compare(pass, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
      async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
      async signup(user: Partial<LoginAndSignUp>): Promise<LoginAndSignUp> {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return this.loginAndSignUpService.create({ ...user, password: hashedPassword });
      }
}