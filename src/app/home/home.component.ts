import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: object;
  params1: object;
  params2: object;
  constructor(
    private http: HttpClient
  ) {
    this.params1 = new HttpParams()
  .set('client_id', 'IwAXDUMbv9kBkQ46udItsZemcagceYYMu3AMgTrS')
  .set('redirect_uri', 'http://localhost:4200')
  .set('response_type', 'code')
  .set('scope', 'donations.read+donations.create');

    this.params2 = new HttpParams()
  .set('access_token', '7BD91A10BFE81AB79222');
  }

  ngOnInit() {
    this.http.get('https://www.streamlabs.com/api/v1.0/donations', this.params2)
    .subscribe(res => {
      this.data = res;
    });
  }

}
