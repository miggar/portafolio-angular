import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProduct } from '../interfaces/info-product.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoProductsService {

  loading = true;
  products: InfoProduct[] = [];
  productsFilter: InfoProduct[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    // console.warn('loadProducts');

    return new Promise((resolve, reject) => {
      this.http.get('https://htmlenwebapp.firebaseio.com/products_idx.json')
        .subscribe((resp: InfoProduct[]) => {
          // console.warn(resp);
          this.products = resp;

          setTimeout(() => {
            this.loading = false;
            resolve();
          }, 250);
        });

    });


  }

  getDetailsProduct(id: string) {
    return this.http.get(`https://htmlenwebapp.firebaseio.com/products/${id}.json`);
  }

  searchProduct(txt: string) {
    if (!this.products.length) {
      // load products
      this.loadProducts().then( () => {
        this.filterProducts( txt );
      });
    } else {
      this.filterProducts( txt );
    }
    // this.productsFilter = this.products.filter(xxx => true);
    // console.warn(this.productsFilter);
  }

  private filterProducts( txt: string ) {
    // console.warn('filterProducts');
    this.productsFilter = [];
    txt = txt.toLowerCase();
    this.products.forEach( prod => {
      if (
        prod.categoria.toLowerCase().indexOf( txt ) >= 0 ||
        prod.titulo.toLowerCase().indexOf( txt ) >= 0) {
        this.productsFilter.push( prod );
      }
    });
    // console.warn(this.productsFilter);
  }
}
