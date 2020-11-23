import { Injectable } from '@angular/core'
import { SessionModel } from '../models/session.model'
import { ResponseModel } from '../models/response.model'
import { ShopModel } from '../models/shop.model'
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'
import { HttpAdapterService } from '../shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  selectedShop = new BehaviorSubject<ShopModel>(undefined)

  get session(): SessionModel {
    return this._session.value
  }

  get session$(): BehaviorSubject<SessionModel> {
    return this._session
  }

  private _session = new BehaviorSubject<SessionModel>(null)

  constructor(private _http: HttpAdapterService, private _router: Router) {
  }

  initSession() {
    this._http.getReq<ResponseModel<SessionModel>>(['shop', 'getmyshops']).subscribe(
      {
        next: ({ data }) => {
          this._session.next(data)
          this._selectCurrentShop(data)
        },
        error: (err) => {
          console.error(err)
        }
      }
    )

    this.selectedShop.subscribe((shop: ShopModel) => {
      if (!shop) {
        return
      }
      window.localStorage.setItem('shopId', shop.id.toString())
    })
  }

  private _selectCurrentShop(data: SessionModel) {
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
