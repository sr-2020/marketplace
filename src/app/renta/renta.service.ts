import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SessionService } from '../services/session.service';
import { ResponseModel } from '../models/response.model';
import { RentaModel } from '../models/renta.model';

@Injectable({
  providedIn: 'root'
})
export class RentaService {

  constructor(private _httpClient: HttpClient, private _session: SessionService) {
  }

  getRentas(): Observable<ResponseModel<RentaModel[]>> {
    return this._httpClient.post<ResponseModel<RentaModel[]>>(`${ environment.api }shop/getrentas`,
      { shop: this._session.selectedShop.value.id },
      { withCredentials: true });
  }

  setQR(qr: string, rentaId: string) {
    console.log({qr, rentaId});
    return this._httpClient.post(`${ environment.api }shop/writerenta2qr`, {
      qr, rentaId
    }, { withCredentials: true });
  }

}
