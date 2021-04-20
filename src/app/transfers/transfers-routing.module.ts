import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TransfersListComponent } from './transfers-list/transfers-list.component'
import { TransactionsNewComponent } from './transfers-new/transactions-new.component'

const transactionsRoutes: Routes = [
  { path: '', component: TransfersListComponent, children: [] },
  {
    path: 'new',
    component: TransactionsNewComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(transactionsRoutes)],
  exports: [RouterModule],
})
export class TransfersRoutingModule {}
