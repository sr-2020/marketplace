import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops.component';
import { ShopsListComponent } from './shops-list/shops-list.component';



@NgModule({
  declarations: [ShopsComponent, ShopsListComponent],
  imports: [
    CommonModule
  ]
})
export class ShopsModule { }
