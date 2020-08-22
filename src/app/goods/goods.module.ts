import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GoddsQrPopupComponent } from './godds-qr-popup/godds-qr-popup.component';


@NgModule({
  declarations: [
    GoodsListComponent,
    GoddsQrPopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    GoodsRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule
  ],
})
export class GoodsModule {
}
