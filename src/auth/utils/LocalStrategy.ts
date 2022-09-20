import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local'
import { Services } from "src/utils/constants";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  
    constructor(
        @Inject(Services.AUTH) private readonly authService){
            super({ usernameField: 'email'});
        }
  
        //call validate meth, pass email and password. Values should validate usercredentials. If return true value, else null
        async validate(email : string, password : string) {
            return this.authService.validateUser({ email, password});
        }
       
}