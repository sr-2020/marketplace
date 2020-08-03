import { Injectable } from '@angular/core';
import mock from './transactions.mock';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private router: Router) { }

  getTransactionList() {
    return mock;
  }

  createTransaction(transaction) {
    mock.unshift(transaction);
    this.router.navigate(['transactions']);
  }

}
