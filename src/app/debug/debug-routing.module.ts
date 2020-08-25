import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebugComponent } from './debug.component'


const debugRoutes: Routes = [
  { path: '', component: DebugComponent}
];

@NgModule({
  imports: [RouterModule.forChild(debugRoutes)],
  exports: [RouterModule]
})

export class DebugRoutingModule { }
