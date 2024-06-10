import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if(!inject(AuthService).isLogged()) {
    inject(Router).navigate(['/modal_login']);
    return false;
  }

  return true;
};
