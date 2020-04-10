import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductsService } from '../../services/info-products.service';
import { DetailsProduct } from '../../interfaces/details-product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  /*
    No se inicializa 'product' en vacio {}, ya que no son opcionales las propiedades en la interface.
    Se debe comprobar en el html si no es 'undefined' -> *ngIf="product" ó {{ product?.categoría}}
  */
  product: DetailsProduct;
  productId: string;

  constructor(
    private route: ActivatedRoute,
    public infoProduct: InfoProductsService
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( parameters => {
        this.productId = parameters.id;
        this.infoProduct.getDetailsProduct(parameters.id)
          .subscribe( (detail: DetailsProduct) => {
            // console.warn(detail.subtitulo1);
            this.product = detail;
          });
      });
  }

}
