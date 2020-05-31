export class UserLogin{
    email:string;
    password:string;

    constructor()
    {
        this.email = '';
        this.password = '';
    }
}

export class JwtToken {
    accessToken: string;
    expiresIn: number;
  
    constructor() {
        this.accessToken = '';
        this.expiresIn = 0;
    }
}