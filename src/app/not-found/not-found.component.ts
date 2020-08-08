import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'sr-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private httpService: HttpClient) {
  }

  test() {
    this.httpService.get(`${environment.api}/Billing/info/getmyshops`, { withCredentials: true }).subscribe(el => {
      console.log(el);
    });
  }

  ngOnInit(): void {
  }

}
