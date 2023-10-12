import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL, API_PRODUCTS_URL } from './adminUrl';
import { Observable } from 'rxjs';
import { AllProductsInterface } from '../adminFiles/adminModels';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private HTTP: HttpClient) {}

  private localStorege = localStorage.getItem('data');

  getAllProducts = (): Observable<AllProductsInterface> => {
    let token;
    if (this.localStorege) {
      token = JSON.parse(this.localStorege).T;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.HTTP.get<AllProductsInterface>(
      API_BASE_URL + API_PRODUCTS_URL,
      {
        headers,
      }
    );
  };
}
