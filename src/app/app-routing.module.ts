import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { environment } from '../environments/environment';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {
    path: '', component: ShopComponent, children: [
      { path: ':id', redirectTo: ':id/goods' },
      {
        path: ':id', children: [
          {
            path: 'info',
            loadChildren: () => import('./info/info.module').then(m => m.InfoModule),
          },
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
          { path: '**', redirectTo: '404' }
        ]
      },
    ]
  },
];

if (!environment.production) {
  routes.unshift({ path: 'debug', loadChildren: () => import('./debug/debug.module').then(m => m.DebugModule), },
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
