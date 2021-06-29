import { Injectable } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Observable } from 'rxjs'
import { Response, Shop } from '@type'
import { HttpAdapterService } from '@shared/services/http-adapter.service'

export interface Contract {
  corporationId: number
  corporationName: string,
  shopId: number,
  shopName: string,
  status: string,
}

@Injectable({
  providedIn: 'root'
})
export class ContractsListService {
  constructor(
    private _http: HttpAdapterService,
    private session: SessionService
  ) {
  }

  getShopList(): Observable<Response<Shop[]>> {
    return this._http.getReq<Response<Shop[]>>(['shops'])
  }

  getContractList(): Observable<Response<Contract[]>> {
    const q = {}
    q[this.session.isShop ? 'shop' : 'corporation'] = this.session.selectedOrg.value?.id
    const path: string[] = ['shop', this.session.isShop ? 'shopcontracts' : 'corporationcontracts']
    return this._http.getReq<Response<Contract[]>>( path, q )
  }

  approveContract(c: Contract): Observable<Response<undefined>> {
    return this._http.postReq<Response<undefined>>(['shop', 'approvecontract'], {
      corporation: c.corporationId,
      shop: c.shopId
    })
  }

  proposeContract(c: Contract): Observable<Response<undefined>> {
    return this._http.postReq<Response<undefined>>(['shop', 'proposecontract'], {
      corporation: c.corporationId,
      shop: c.shopId
    })
  }

  terminateContract(c: Contract): Observable<Response<undefined>> {
    return this._http.postReq<Response<undefined>>(['shop', 'terminatecontract'], {
      corporation: c.corporationId,
      shop: c.shopId
    })
  }

  suggestContract(shopId: number): Observable<Response<undefined>> {
    return this._http.postReq<Response<undefined>>(['shop', 'suggestcontract'], {
      corporation: this.session.selectedOrg.value.id,
      shop: shopId
    })
  }
}
