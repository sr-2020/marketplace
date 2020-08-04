import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _appService: AppService, private _navService: NavService) {
  }

  get isMobile() {
    return this._appService.isMobile;
  }

  get isOpenNav() {
    return this._navService.isOpen;
  }

  openCloseNav() {
    this._navService.toggleNavBar();
  }
}
