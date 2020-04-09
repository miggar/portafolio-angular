import { Component, OnInit } from '@angular/core';
import { InfoProductsService } from '../../services/info-products.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public infoProductsService: InfoProductsService) { }

  ngOnInit(): void {
  }

}
