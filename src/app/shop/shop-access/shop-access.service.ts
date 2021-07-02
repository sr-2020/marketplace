import { Injectable } from '@angular/core'
import { HttpAdapterService } from '@shared/services/http-adapter.service'
import { SessionService } from '@services/session.service'

@Injectable({
  providedIn: 'root'
})
export class ShopAccessService {

  constructor(private _http: HttpAdapterService, private session: SessionService) { }


  updateTrustedUsers(users: string[]) {
    return this._http.postReq(['shop', 'shop'], {
      shop: this.session.selectedOrg.value.id,
      trustedModels: users
    } )
  }
}
