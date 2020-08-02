import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsNewComponent } from './transactions-new/transactions-new.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [TransactionsComponent, TransactionsListComponent, TransactionsNewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
