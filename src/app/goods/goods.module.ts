import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [GoodsComponent, GoodsListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    GoodsRoutingModule
  ],
})
export class GoodsModule { }
