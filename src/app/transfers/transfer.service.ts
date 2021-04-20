import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { SessionService } from '../services/session.service'
import { Observable } from 'rxjs'
import { Response, Transfer } from '@type'
import { HttpAdapterService } from '../shared/services/http-adapter.service'

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
      shop: this._session.selectedShop.value.id,
    })
  }

  createTransaction(transaction) {}
}
