import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'
import { environment } from '../environments/environment'


const routes: Routes = [
  { path: '', redirectTo: 'goods', pathMatch: 'full' },
  { path: 'api/v1', component: NotFoundComponent },
  { path: 'goods', loadChildren: () => import('./goods/goods.module').then(m => m.GoodsModule), },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
]

if (!environment.production) {
  routes.push({ path: 'debug', loadChildren: () => import('./debug/debug.module').then(m => m.DebugModule), },
  )
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
