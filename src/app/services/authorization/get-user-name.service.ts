import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_GET_USER_URL } from './apiUrl';
@Injectable({
  providedIn: 'root',
})
export class GetUserNameService {
  constructor(private HTTP: HttpClient) {}

  private localStorege = localStorage.getItem('data');

  userName!: string;

  getUserDataFunc(): Observable<any> {
    let token;
    if (this.localStorege) {
      token = JSON.parse(this.localStorege).T;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.HTTP.get(API_BASE_URL + API_GET_USER_URL, {
      headers,
    });
  }
}
