import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { SessionService } from '../services/session.service'
import { Response } from '../models/response'
import { Renta } from '../models/renta'
import { HttpAdapterService } from '../shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root',
})
export class RentaService {
  constructor(
    private _http: HttpAdapterService,
    private _session: SessionService
  ) {}

  getRentas(): Observable<Response<Renta[]>> {
    return this._http.postReq<Response<Renta[]>>(
      ['shop', 'getrentas'],
      { shop: this._session.selectedShop.value.id }
    )
  }

  setQR(qr: string, rentaId: string) {
    return this._http.postReq(['shop', 'writerenta2qr'], {
      qr,
      rentaId,
    })
  }
}
