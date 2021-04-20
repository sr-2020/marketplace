import { Injectable } from '@angular/core'
import { Response, Session, Shop } from '@type'
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'
import { HttpAdapterService } from '../shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  selectedShop = new BehaviorSubject<Shop>(undefined)

  get session(): Session {
    return this._session.value
  }

  get session$(): BehaviorSubject<Session> {
    return this._session
  }

  private _session = new BehaviorSubject<Session>(null)

  constructor(private _http: HttpAdapterService, private _router: Router) {}

  initSession() {
    this._http
      .getReq<Response<Session>>(['shop', 'organisations'])
      .subscribe({
        next: ({ data }) => {
          this._session.next(data)
          this._selectCurrentShop(data)
        },
        error: (err) => {
          console.error(err)
          if (err.status === 401) {
            window.location.href =
              'http://web.evarun.ru/login?externalUrl=https://marketplace.evarun.ru'
          }
        },
      })

    this.selectedShop.subscribe((shop: Shop) => {
      if (!shop) {
        return
      }
      window.localStorage.setItem('shopId', shop.id.toString())
    })
  }

  private _selectCurrentShop(data: Session) {
    const shopId = +window.localStorage.getItem('shopId')
    if (!data.shops.find((el) => el?.id === shopId)) {
      window.localStorage.removeItem('shopId')
      this.selectedShop.next(null)
      return
    }
    this.selectedShop.next(data.shops.find((el) => el?.id === shopId))
  }

  public changeShop(shop) {
    this.selectedShop.next(shop)
  }

  public logOut() {
    this.selectedShop.next(null)
    document.cookie = 'Authorization=1;max-age=-1'
    document.location.href = 'http://web.evarun.ru/login'
  }
}
