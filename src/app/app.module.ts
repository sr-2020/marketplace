import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoodsModule } from './goods/goods.module';
import { SrCommonModule } from './common/common.module';
import { MatButtonModule } from '@angular/material/button';
import { TransactionsModule } from './transactions/transactions.module';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeRu, 'ru_RU');

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SrCommonModule,
    GoodsModule,
    TransactionsModule,
    MatButtonModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
