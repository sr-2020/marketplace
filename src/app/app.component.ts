import { Component, HostListener } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _appService: AppService) {}

  @HostListener('window:resize')
  onResize() {
    this._appService.isMobile = window.innerWidth < 767;
  }

}
