import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsNewComponent } from './transactions-new/transactions-new.component';

const transactionsRoutes: Routes = [
  { path: '', component: TransactionsListComponent, children: [] },
  {
    path: 'new',
    component: TransactionsNewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(transactionsRoutes)],
  exports: [RouterModule]
})

export class TransactionsRoutingModule {
}
