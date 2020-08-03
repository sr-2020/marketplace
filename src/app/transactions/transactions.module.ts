import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsNewComponent } from './transactions-new/transactions-new.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [TransactionsComponent, TransactionsListComponent, TransactionsNewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    TransactionsRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    MatExpansionModule
  ]
})
export class TransactionsModule { }
