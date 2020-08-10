import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { NavService } from '../nav/nav.service';
import { SessionService } from '../../services/session.service';
import { SessionModel } from '../../models/session.model';

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _appService: AppService, private _navService: NavService, private _session: SessionService) {
  }

  get isMobile() {
    return this._appService.isMobile;
  }

  get isOpenNav() {
    return this._navService.isOpen;
  }

  get session(): SessionModel {
    return  this._session.session;
  }

  openCloseNav() {
    this._navService.toggleNavBar();
  }
}
