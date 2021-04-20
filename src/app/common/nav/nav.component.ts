import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { AppService } from '../../app.service'
import { NavService } from './nav.service'
import { SessionService } from '@services/session.service'

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Output() linkSelected = new EventEmitter<null>()

  constructor(
    private _router: Router,
    private _appService: AppService,
    private _navService: NavService,
    private _sessionService: SessionService
  ) {}

  navBarSchema = [
    {
      name: 'Информация',
      routerLink: 'info',
    },
    {
      name: 'Переводы',
      routerLink: 'transfers',
    },
    {
      name: 'Контракты',
      routerLink: 'contracts',
      disabled: true,
    },
    {
      name: 'Доступные товары',
      routerLink: 'goods',
    },
    {
      name: 'Купленные товары',
      routerLink: 'renta',
      disabled: false,
    },
    {
      name: 'Доступы',
      routerLink: 'permissions',
      disabled: true,
    },
  ]

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