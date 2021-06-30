import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SkusListComponent } from './skus-list/skus-list.component'

const skuRoutes: Routes = [
  { path: '', component: SkusListComponent, children: [] },
]

@NgModule({
  imports: [RouterModule.forChild(skuRoutes)],
  exports: [RouterModule],
})
export class CorpSkusRoutingModule {}
