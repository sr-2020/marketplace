import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { BasketQrPopupComponent } from './basket-qr-popup/basket-qr-popup.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [BasketComponent, BasketQrPopupComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule,
    ZXingScannerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,

  ]
})
export class BasketModule {
}
