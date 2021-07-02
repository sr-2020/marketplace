import { Component, OnInit } from '@angular/core'
import { Organisation, Session } from '@type'
import { AppService } from '../app.service'
import { SessionService } from '@services/session.service'
import { BehaviorSubject} from 'rxjs'

@Component({
  selector: 'sr-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit{
  navBarSchema: {name: string, routerLink: string}[]
  constructor(
    private _appService: AppService,
    private _sessionService: SessionService
  ) {}
  ngOnInit() {

    this.shop$.subscribe(shop => {
      this.navBarSchema = [
        {
          name: 'Информация',
          routerLink: 'info',
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

      if (shop?.isOwner) {
        this.navBarSchema = [
          ...this.navBarSchema,
          {
            name: 'Переводы',
            routerLink: 'transfers',
          },
          {
            name: 'Контракты',
            routerLink: 'contracts',
          },
          {
            name: 'Доступы',
            routerLink: 'access',
          },
        ]
      }
    })

  }

  get isMobile() {
    return this._appService.isMobile
  }

  get shop$(): BehaviorSubject<Organisation> {
    return this._sessionService.selectedOrg
  }
  get session(): Session {
    return this._sessionService.session
  }
}
