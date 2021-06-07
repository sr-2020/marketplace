import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OfferComponent } from './offer.component'
import { OfferRoutingModule } from './offer-routing.module'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar'
import { SharedModule } from '@shared/shared.module'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [OfferComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class OfferModule {}
