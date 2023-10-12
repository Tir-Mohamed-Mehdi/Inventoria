import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = () => {
  const route = inject(Router);

  let isLoggedIn = !!localStorage.getItem('data');

  if (!isLoggedIn) {
    route.navigate(['login']);

    return false;
  } else {
    return true;
  }
};
