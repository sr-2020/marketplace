import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

const transactionsRoutes: Routes = [
  { path: '', component: TransactionsListComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(transactionsRoutes)],
  exports: [RouterModule]
})

export class TransactionsRoutingModule { }
