import { Injectable } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Observable } from 'rxjs'
import { Response } from '@type'
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

  getContractList(): Observable<Response<Contract[]>> {
    const q = {}
    q[this.session.isShop ? 'shop' : 'corporation'] = this.session.selectedOrg.value?.id
    const path: string[] = ['shop', this.session.isShop ? 'shopcontracts' : 'corporationcontracts']
    return this._http.getReq<Response<Contract[]>>( path, q )
  }
}
