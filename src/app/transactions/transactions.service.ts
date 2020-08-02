import { Injectable } from '@angular/core';
import mock from './transactions.mock';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getTransactionList() {
    return mock;
  }

}
