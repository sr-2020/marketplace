import { Injectable } from '@angular/core'
import { SessionService } from '../services/session.service'
import { Observable } from 'rxjs'
import { ResponseModel } from '../models/response.model'
import { OfferModel } from '../models/offer.model'
import { HttpAdapterService } from '../shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(
    private _http: HttpAdapterService,
    private _session: SessionService
  ) {}

  getRenta(id: string): Observable<ResponseModel<OfferModel>> {
    return this._http.postReq<ResponseModel<OfferModel>>(
      ['shop', 'createpricebyqr'],
      {
        qr: id,
      }
    )
  }

  createRenta(priceId: number) {
    return this._http.postReq<any>(['shop', 'createrenta'], {
      priceId,
    })
  }
}
