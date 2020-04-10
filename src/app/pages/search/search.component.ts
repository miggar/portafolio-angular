import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductsService } from '../../services/info-products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public infoProductsService: InfoProductsService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe( params => {
        console.warn( params.txt );
        this.infoProductsService.searchProduct( params.txt );
      });
  }

}
