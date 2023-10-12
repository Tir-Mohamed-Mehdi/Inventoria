import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthHelpFunctionsService {
  constructor(private snakbar: MatSnackBar) {}

  addToLocalStorage(token: string, role: string): void {
    return localStorage.setItem('data', `{"T":"${token}", "R":"${role}"}`);
  }

  showSnackBar(message: string, props: object): void {
    this.snakbar.open(message, '', {
      ...props,
    });
  }

  checkJwtDate(localStorage: { T: string; R: string } | number) {
    if (typeof localStorage !== 'number') {
      return new Date(
        JSON.parse(atob(localStorage.T.split('.')[1])).exp * 1000
      ).getTime();
    } else {
      return 0;
    }
  }
}
