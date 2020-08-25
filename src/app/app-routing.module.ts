import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { environment } from '../environments/environment';
import { ShopComponent } from './shop/shop.component';
import { PrintComponent } from './print/print.component';


const routes: Routes = [
  {
    path: 'print', component: PrintComponent
  },
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
            path: 'renta',
            loadChildren: () => import('./renta/renta.module').then(m => m.RentaModule),
          },
          {
            path: 'transfers',
            loadChildren: () => import('./transfers/transfers.module').then(m => m.TransfersModule),
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
