import { Injectable } from '@angular/core'
import { Organisation, Response, Session } from '@type'
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'
import { HttpAdapterService } from '@shared/services/http-adapter.service'
import { checkOrganisationType } from '../util/helpers'

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  selectedOrg = new BehaviorSubject<Organisation>(undefined)

  get session(): Session {
    return this._session.value
  }

  get isShop(): boolean {
     return this.selectedOrg.value.corporationUrl === undefined
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

    this.selectedOrg.subscribe((org: Organisation) => {
      switch (checkOrganisationType(org)) {
        case 'shop':
          window.localStorage.setItem('shopId', org.id.toString())
          break
        case 'corporation':
          window.localStorage.setItem('corpId', org.id.toString())
          break
      }
    })
  }

  private _selectCurrentShop(data: Session) {
    const shopId = +window.localStorage.getItem('shopId')
    const corpId = +window.localStorage.getItem('corpId')
    if (shopId && corpId) {
      this.selectedOrg.next(null)
      return
    }

    const shop = data.shops.find((el) => el?.id === shopId)
    if (shop) {
      this.selectedOrg.next(shop)
      return
    }

    const corp = data.corporations.find((el) => el?.id === corpId)
    if (corp) {
      this.selectedOrg.next(corp)
      return
    }

    this.selectedOrg.next(null)
  }

  public changeOrg(org: Organisation) {
    this.selectedOrg.next(org)
  }

  public logOut() {
    this.selectedOrg.next(null)
    document.cookie = 'Authorization=1;max-age=-1'
    document.location.href = 'http://web.evarun.ru/login'
  }
}
