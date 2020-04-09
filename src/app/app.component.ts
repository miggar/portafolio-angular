import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { InfoProductsService } from './services/info-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'portafolio';
  constructor(
    public infoPageService: InfoPageService,
    public infoProductsService: InfoProductsService ) {

  }
}
