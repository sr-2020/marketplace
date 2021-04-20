import localeRu from '@angular/common/locales/ru'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AppService } from './app.service'
import { AuthComponent } from './common/auth/auth.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { GoodsModule } from './goods/goods.module'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatOptionModule } from '@angular/material/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NavComponent } from './common/nav/nav.component'
import { NgModule } from '@angular/core'
import { NotFoundComponent } from './common/not-found/not-found.component'
import { PrintComponent } from './common/print/print.component'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '@shared/shared.module'
import { ShopComponent } from './shop/shop.component'
import { TransfersModule } from './transfers/transfers.module'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeRu, 'ru_RU')

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavComponent,
    ShopComponent,
    PrintComponent,
    AuthComponent,
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
    MatListModule,
    SharedModule,
    MatRadioModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],

  bootstrap: [AppComponent],
})
export class AppModule {}
