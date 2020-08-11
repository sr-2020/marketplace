import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoodsModule } from './goods/goods.module';
import { MatButtonModule } from '@angular/material/button';
import { TransactionsModule } from './transactions/transactions.module';
import { registerLocaleData } from '@angular/common';
import { AppService } from './app.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import localeRu from '@angular/common/locales/ru';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

registerLocaleData(localeRu, 'ru_RU');

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GoodsModule,
    TransactionsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [AppService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
