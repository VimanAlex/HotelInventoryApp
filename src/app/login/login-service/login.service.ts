import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isValidUser:boolean = false;
  isAdmin:boolean = false;
  constructor() { }

  login(email:string,password:string):boolean{
    if(email === 'vimanalex@gmail.com' && password === '123456')
    {
      this.isValidUser = true;
      this.isAdmin = true;
    }
    else if (email === 'user@gmail.com' && password === '123456'){
      this.isValidUser = true;
      this.isAdmin = false;
    }
    return this.isValidUser;
  }
}
