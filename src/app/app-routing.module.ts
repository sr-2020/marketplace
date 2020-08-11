import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { environment } from '../environments/environment';


const routes: Routes = [
  { path: '', redirectTo: 'goods', pathMatch: 'full'},
  {
    path: 'goods',
    loadChildren: () => import('./goods/goods.module').then(m => m.GoodsModule),
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule),
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
  },
];

if (!environment.production) {
  routes.push({ path: 'debug', loadChildren: () => import('./debug/debug.module').then(m => m.DebugModule), },
  );
}
routes.push({ path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
