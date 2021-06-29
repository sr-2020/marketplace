import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContractsListComponent } from './contracts-list/contracts-list.component'
import { ContractsRoutingModule } from './contracts-routing.module'
import { MatListModule } from '@angular/material/list'
import { SharedModule } from '@shared/shared.module'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { ContractStatusPipe } from '@shared/pipes/contractStatus.pipe'
import { ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    ContractsListComponent,
    ContractStatusPipe
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    MatListModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ContractsModule { }
