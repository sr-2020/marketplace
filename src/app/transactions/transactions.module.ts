import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsRoutingModule } from './transactions-routing.module';



@NgModule({
  declarations: [TransactionsComponent, TransactionsListComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
