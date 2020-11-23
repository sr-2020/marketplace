import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { PrintComponent } from './print/print.component';
import { AuthComponent } from './auth/auth.component';
import { ShopGuard } from './shop/shop.guard';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'print', component: PrintComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'offer', redirectTo: '/goods', pathMatch: 'full',
  },
  {
    path: 'offer/:id', loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule),
  },
  { path: '', redirectTo: '/goods', canActivate: [ShopGuard], canActivateChild: [ShopGuard], pathMatch: 'full' },
  {
    path: '', component: ShopComponent, canActivate: [ShopGuard], canActivateChild: [ShopGuard], children: [
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
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
