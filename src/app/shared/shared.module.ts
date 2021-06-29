import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LifestylePipe } from './pipes/lifestyle.pipe'
import { LoadingComponent } from './loading/loading.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FilterPipe } from './pipes/filter.pipe'
import { OrganisationPipe } from './pipes/organisation.pipe'
import { DialogComponent } from './dialog/dialog.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [LifestylePipe, LoadingComponent, FilterPipe, OrganisationPipe, DialogComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatDialogModule, MatButtonModule],
  exports: [LifestylePipe, LoadingComponent, FilterPipe, OrganisationPipe],
})
export class SharedModule {}
