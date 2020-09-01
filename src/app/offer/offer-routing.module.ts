import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from './offer.component'

const offersRoutes: Routes = [
  { path: '', component: OfferComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forChild(offersRoutes)],
  exports: [RouterModule]
})

export class OfferRoutingModule {
}
