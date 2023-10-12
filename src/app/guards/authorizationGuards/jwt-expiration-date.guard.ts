import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenExpirationService } from 'src/app/services/authorization/token-expiration.service';

export const jwtExpirationDateGuard: CanActivateFn = () => {
  const JWT_EXPIRATION = inject(TokenExpirationService);
  const router = inject(Router);

  if (JWT_EXPIRATION.localData && JWT_EXPIRATION.tokenExpirationDate()) {
    router.navigate(['login']);
    localStorage.clear();

    return false;
  } else {
    return true;
  }
};
