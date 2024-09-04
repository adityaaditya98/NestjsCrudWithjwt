import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"login-and-sign-up"})
export class LoginAndSignUp {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    email:string;
    @Column()
    password:string;
}
