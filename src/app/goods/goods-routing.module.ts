import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './goods-list/goods-list.component';


const goodsRoutes: Routes = [
  { path: '', component: GoodsListComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(goodsRoutes)],
  exports: [RouterModule]
})

export class GoodsRoutingModule { }
