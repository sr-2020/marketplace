import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RentaComponent } from './renta.component'
import { RentaRoutingModule } from './renta-routing.module'
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { SharedModule } from '../shared/shared.module'
import { RentaQrPopupComponent } from './renta-qr-popup/renta-qr-popup.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [RentaComponent, RentaQrPopupComponent],
  imports: [
    CommonModule,
    RentaRoutingModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule

  ]
})
export class RentaModule {
}
