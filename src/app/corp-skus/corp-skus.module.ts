import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkusListComponent } from './skus-list/skus-list.component'
import { CorpSkusRoutingModule } from './corp-skus-routing.module'
import { SharedModule } from '@shared/shared.module'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatCardModule } from '@angular/material/card'



@NgModule({
  declarations: [
    SkusListComponent
  ],
  imports: [
    CommonModule,
    CorpSkusRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class CorpSkusModule { }
