import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LifestylePipe } from './pipes/lifestyle.pipe'
import { LoadingComponent } from './loading/loading.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FilterPipe } from './pipes/filter.pipe'
import { OrganisationPipe } from './pipes/organisation.pipe'

@NgModule({
  declarations: [LifestylePipe, LoadingComponent, FilterPipe, OrganisationPipe],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LifestylePipe, LoadingComponent, FilterPipe, OrganisationPipe],
})
export class SharedModule {}
