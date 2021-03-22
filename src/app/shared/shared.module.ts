import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LifestylePipe } from './pipes/lifestyle.pipe'
import { LoadingComponent } from './loading/loading.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [LifestylePipe, LoadingComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LifestylePipe, LoadingComponent],
})
export class SharedModule {}
