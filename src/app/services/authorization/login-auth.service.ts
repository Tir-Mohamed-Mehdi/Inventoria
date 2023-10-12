import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { loginUserModel } from 'src/app/shared/sharedModel/shared.model';
import { AuthHelpFunctionsService } from '../helpService/auth-help-func.service';
import { API_BASE_URL, API_LOG_AUTH_URL } from './apiUrl';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  constructor(
    private HTTP: HttpClient,
    private ROUTER: Router,
    private HELP_FUNC: AuthHelpFunctionsService
  ) {}

  public _ifLoading$ = new BehaviorSubject<boolean>(false);

  loginFunc = (userData: loginUserModel) => {
    this._ifLoading$.next(true);

    return this.HTTP.post(API_BASE_URL + API_LOG_AUTH_URL, userData)
      .subscribe({
        next: (data: any) => {
          this.HELP_FUNC.addToLocalStorage(data.jwt, data.user.responsibility);
          this.ROUTER.navigate(['/dashboard']);
        },
        error: (error) => {
          this.HELP_FUNC.showSnackBar(error.error.error.message, {
            duration: 3000,
            panelClass: ['snackBar_error'],
          });
        },
      })
      .add(() => this._ifLoading$.next(false));
  };
}
