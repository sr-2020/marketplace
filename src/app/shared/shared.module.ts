import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifestylePipe } from './pipes/lifestyle.pipe';



@NgModule({
  declarations: [LifestylePipe],
  imports: [
    CommonModule
  ],
  exports: [
    LifestylePipe
  ]
})
export class SharedModule { }
