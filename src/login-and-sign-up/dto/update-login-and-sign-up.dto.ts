import { PartialType } from '@nestjs/mapped-types';
import { CreateLoginAndSignUpDto } from './create-login-and-sign-up.dto';

export class UpdateLoginAndSignUpDto extends PartialType(CreateLoginAndSignUpDto) {}
