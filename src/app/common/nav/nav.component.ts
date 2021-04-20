import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import { AppService } from '../../app.service'
import { NavService } from './nav.service'
import { SessionService } from '@services/session.service'

export interface NavBarSchema {
  name: string
  routerLink: string,
  disabled?: boolean
}

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() schema: NavBarSchema[] = []
  @Input() type: 'corp' | 'shop'
  @Output() linkSelected = new EventEmitter<null>()
  constructor(
    private _router: Router,
    private _appService: AppService,
    private _navService: NavService,
    private _sessionService: SessionService
  ) {}



  get isMobile() {
    return this._appService.isMobile
  }

  get isOpen() {
    return this._navService.isOpen
  }

  get currentShop() {
    return this._sessionService.selectedOrg.value
  }

  close() {
    this._navService.isOpen = false
  }

  onClick() {
    this.linkSelected.emit()
  }

  changeShop() {
    this._sessionService.selectedOrg.next(null)
    this._router.navigate(['/', 'auth'])
  }

  logOut() {
    this._sessionService.logOut()
  }
}
