import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginPageGuard: CanActivateFn = () => {
  const route = inject(Router);
  let isLoggedIn = !!localStorage.getItem('data');

  if (isLoggedIn) {
    route.navigate(['dashboard']);
    return false;
  } else {
    return true;
  }
};
