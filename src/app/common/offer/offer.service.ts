import { Injectable } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Observable } from 'rxjs'
import { Offer, Response } from '@type'
import { HttpAdapterService } from '@shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(
    private _http: HttpAdapterService,
    private _session: SessionService
  ) {}

  getRenta(id: string): Observable<Response<Offer>> {
    return this._http.postReq<Response<Offer>>(['shop', 'createpricebyqr'], {
      qr: id,
    })
  }

  createRenta(priceId: number, count: number) {
    return this._http.postReq<any>(['shop', 'createrenta'], {
      priceId,
      count
    })
  }
}
