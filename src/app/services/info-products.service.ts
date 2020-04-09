import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProduct } from '../interfaces/info-product.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoProductsService {

  loading = true;
  products: InfoProduct[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    console.warn('loadProducts');
    this.http.get('https://htmlenwebapp.firebaseio.com/products_idx.json')
      .subscribe( (resp: InfoProduct[]) => {
        console.warn(resp);
        this.products = resp;

        setTimeout(() => {
          this.loading = false;
        }, 250);
      });
  }
}
