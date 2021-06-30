import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShopComponent } from './shop/shop.component'
import { PrintComponent } from './common/print/print.component'
import { AuthComponent } from './common/auth/auth.component'
import { ShopGuard } from './shop/shop.guard'
import { NotFoundComponent } from './common/not-found/not-found.component'
import { CorpComponent } from './corp/corp.component'
import { CorpGuard } from './corp/corp.guard'
import { AppGuard } from './guards/app.guard'

const routes: Routes = [
  {
    path: 'print',
    component: PrintComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'offer',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NotFoundComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'offer/:id',
    loadChildren: () =>
      import('./common/offer/offer.module').then((m) => m.OfferModule)
  },
  {
    path: 'corp',
    component: CorpComponent,
    canActivate: [CorpGuard],
    canActivateChild: [CorpGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info'
      },
      {
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoModule)
      },
      {
        path: 'contracts',
        loadChildren: () =>
          import('./contracts/contracts.module').then((m) => m.ContractsModule)
      },
      {
        path: 'skus',
        loadChildren: () =>
          import('./corp-skus/corp-skus.module').then((m) => m.CorpSkusModule)
      }
    ]
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [ShopGuard],
    canActivateChild: [ShopGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info'
      },
      {
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoModule)
      },
      {
        path: 'goods',
        loadChildren: () =>
          import('./goods/goods.module').then((m) => m.GoodsModule)
      },
      {
        path: 'contracts',
        loadChildren: () =>
          import('./contracts/contracts.module').then((m) => m.ContractsModule)
      },
      {
        path: 'renta',
        loadChildren: () =>
          import('./renta/renta.module').then((m) => m.RentaModule)
      },
      {
        path: 'transfers',
        loadChildren: () =>
          import('./transfers/transfers.module').then((m) => m.TransfersModule)
      }
    ]
  },

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
