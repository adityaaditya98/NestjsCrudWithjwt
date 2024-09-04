import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { register } from "module";
import { LoginAndSignUp } from "src/login-and-sign-up/entities/login-and-sign-up.entity";
import { LoginAndSignUpModule } from "src/login-and-sign-up/login-and-sign-up.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LoginAndSignUpService } from "src/login-and-sign-up/login-and-sign-up.service";
import { AuthController } from "./auth.controller";

@Module({
    imports:[
        LoginAndSignUpModule,
        PassportModule,
        JwtModule.register({
            secret:'yourSecretKey',
            signOptions:{expiresIn: '60m'},
        }),
        TypeOrmModule.forFeature([LoginAndSignUp]),
    ],
    providers:[AuthService,JwtStrategy,LoginAndSignUpService],
    controllers:[AuthController],
})
export class AuthModule{}