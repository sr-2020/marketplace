import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { SessionService } from '@services/session.service'
import { Observable } from 'rxjs'
import { Response, Transfer } from '@type'
import { HttpAdapterService } from '@shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(
    private router: Router,
    private _session: SessionService,
    private _http: HttpAdapterService
  ) {}

  getTransferList(): Observable<Response<Transfer[]>> {
    return this._http.postReq<Response<Transfer[]>>(['shop', 'getTransfers'], {
      shop: this._session.selectedOrg.value.id,
    })
  }

  createTransaction({ target, amount, comment }, organisation: boolean) {
    const resp = {
      shop: this._session.selectedOrg.value.id,
      amount,
      comment,
      [organisation ? 'shopTo' : 'sin']: target,
    }

    return this._http.postReq(
      ['shop', organisation ? 'maketransfertoleg' : 'maketransfertosin'],
      resp
    )
  }
}
