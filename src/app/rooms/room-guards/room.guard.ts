import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login-service/login.service';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {

  let loginService = inject(LoginService);
  return loginService.isAdmin;
};
