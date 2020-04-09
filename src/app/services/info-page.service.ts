import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;

  team: any[] = [];

  constructor(private http: HttpClient) {
    // console.warn('InfoPageService');

    this.loadInfo();
    this.loadTeam();
  }

  // Leer el archivo data-page.json
  private loadInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.info = resp;
        this.loaded = true;
        // console.warn(resp);
      });
  }

  private loadTeam() {
    this.http.get('https://htmlenwebapp.firebaseio.com/team.json')
      .subscribe( (resp: any) => {
        this.team = resp;
        // console.warn(resp);
      });
  }
}
