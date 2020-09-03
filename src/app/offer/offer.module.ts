import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferRoutingModule } from './offer-routing.module'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [OfferComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class OfferModule { }