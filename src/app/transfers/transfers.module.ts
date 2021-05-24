import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TransfersComponent } from './transfers.component'
import { TransfersListComponent } from './transfers-list/transfers-list.component'
import { TransfersRoutingModule } from './transfers-routing.module'
import { TransactionsNewComponent } from './transfers-new/transactions-new.component'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatExpansionModule } from '@angular/material/expansion'
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator'
import { getRusPaginatorIntl } from '../util/paginationTranslation'
import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SharedModule } from '@shared/shared.module'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    TransfersComponent,
    TransfersListComponent,
    TransactionsNewComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    TransfersRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    SharedModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: getRusPaginatorIntl() }],
})
export class TransfersModule {
  constructor() {}
}
