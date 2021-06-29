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
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { ShopsListComponent } from './shops-list/shops-list.component'



@NgModule({
  declarations: [
    ContractsListComponent,
    ContractStatusPipe,
    ShopsListComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    MatListModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ContractsModule { }
