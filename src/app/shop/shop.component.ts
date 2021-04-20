import { Component } from '@angular/core'
import { Organisation, Session } from '@type'
import { AppService } from '../app.service'
import { SessionService } from '@services/session.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'sr-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
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
    },
  ]
  constructor(
    private _appService: AppService,
    private _sessionService: SessionService
  ) {}

  get isMobile() {
    return this._appService.isMobile
  }
  get shop$(): Observable<Organisation> {
    return this._sessionService.selectedOrg
  }
  get session(): Session {
    return this._sessionService.session
  }
}
