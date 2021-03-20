import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InfoComponent } from './info.component'

const infoRoutes: Routes = [
  { path: '', component: InfoComponent, children: [] },
]

@NgModule({
  imports: [RouterModule.forChild(infoRoutes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
