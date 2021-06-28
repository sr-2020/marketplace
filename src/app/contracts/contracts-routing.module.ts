import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ContractsListComponent } from './contracts-list/contracts-list.component'

const contractsRoutes: Routes = [
  { path: '', component: ContractsListComponent, children: [] },
]

@NgModule({
  imports: [RouterModule.forChild(contractsRoutes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule {}
