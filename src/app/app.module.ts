import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoodsModule } from './goods/goods.module';
import { MatButtonModule } from '@angular/material/button';
import { TransfersModule } from './transfers/transfers.module';
import { registerLocaleData } from '@angular/common';
import { AppService } from './app.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import localeRu from '@angular/common/locales/ru';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShopComponent } from './shop/shop.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { PrintComponent } from './print/print.component';
import { BuyGoodsComponent } from './buy-goods/buy-goods.component';

registerLocaleData(localeRu, 'ru_RU');

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavComponent,
    ShopComponent,
    PrintComponent,
    BuyGoodsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GoodsModule,
    TransfersModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [AppService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
