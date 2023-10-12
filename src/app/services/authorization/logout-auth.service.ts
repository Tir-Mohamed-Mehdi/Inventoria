import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogoutAuthService {
  constructor() {}

  logoutFunc() {
    localStorage.clear();
    location.reload();
  }
}
