import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { MatTableModule } from '@angular/material/table';
import { GoodsItemComponent } from './goods-item/goods-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [GoodsComponent, GoodsListComponent, GoodsItemComponent],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    GoodsRoutingModule
  ],
})
export class GoodsModule { }
