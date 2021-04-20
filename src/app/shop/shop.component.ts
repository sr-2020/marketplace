import { Component } from '@angular/core'
import { Session, Shop } from '@type'
import { AppService } from '../app.service'
import { SessionService } from '../services/session.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'sr-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor(
    private _appService: AppService,
    private _sessionService: SessionService
  ) {}

  get isMobile() {
    return this._appService.isMobile
  }
  get shop$(): Observable<Shop> {
    return this._sessionService.selectedShop
  }
  get session(): Session {
    return this._sessionService.session
  }
}
