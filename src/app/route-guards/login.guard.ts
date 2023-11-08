import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login-service/login.service';
import { inject } from '@angular/core';



export const loginGuard: CanActivateFn = (route, state) => {

let loginService = inject(LoginService);
const router = inject(Router);
  
return loginService.isValidUser ? true : router.navigateByUrl('/login'); 
};
  