import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodsListComponent} from "./goods-list/goods-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  {path: '', component: GoodsListComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
