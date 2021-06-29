import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ContractsListComponent } from './contracts-list/contracts-list.component'
import { ShopsListComponent } from './shops-list/shops-list.component'

const contractsRoutes: Routes = [
  { path: '', component: ContractsListComponent, children: [] },
  { path: 'shops', component: ShopsListComponent, children: [] },
]

@NgModule({
  imports: [RouterModule.forChild(contractsRoutes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule {}
