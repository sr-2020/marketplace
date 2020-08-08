import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions/transactions.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sr-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private httpService: HttpClient) {
  }

  test() {
    this.httpService.get('https://gateway.evarun.ru/api/v1/billing/api/test/testid').subscribe(el => {
      console.log(el);
    });
  }

  ngOnInit(): void {
  }

}
