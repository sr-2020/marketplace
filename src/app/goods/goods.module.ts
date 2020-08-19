import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsItemComponent } from './goods-item/goods-item.component';
import { SharedModule } from '../shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [GoodsComponent, GoodsListComponent, GoodsItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    GoodsRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
})
export class GoodsModule { }
