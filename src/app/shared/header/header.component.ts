import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public infoPageService: InfoPageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct(txt: string) {
    // console.warn(txt.length );
    if (!txt.length) {
      return;
    }

    this.router.navigate(['/search', txt ]);
  }

}
