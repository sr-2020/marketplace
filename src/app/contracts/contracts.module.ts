import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContractsListComponent } from './contracts-list/contracts-list.component'
import { ContractsRoutingModule } from './contracts-routing.module'
import { MatListModule } from '@angular/material/list'
import { SharedModule } from '@shared/shared.module'



@NgModule({
  declarations: [
    ContractsListComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    MatListModule,
    SharedModule
  ]
})
export class ContractsModule { }
