import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'sr-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  transactionList: any;
  constructor(private service: TransactionsService) { }

  ngOnInit(): void {
    this.transactionList = this.service.getTransactionList();
  }

}
