import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { SessionService } from '../services/session.service'
import { ResponseModel } from '../models/response.model'
import { RentaModel } from '../models/renta.model'
import { HttpAdapterService } from '../shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root',
})
export class RentaService {
  constructor(
    private _http: HttpAdapterService,
    private _session: SessionService
  ) {}

  getRentas(): Observable<ResponseModel<RentaModel[]>> {
    return this._http.postReq<ResponseModel<RentaModel[]>>(
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
