import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SessionService } from '../services/session.service';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { OfferModel } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private _httpClient: HttpClient, private _session: SessionService) {
  }

  getRenta(id: string): Observable<ResponseModel<OfferModel>> {
    return this._httpClient.post<ResponseModel<OfferModel>>(`${ environment.api }shop/createpricebyqr`, {
      qr: id
    }, { withCredentials: true });
  }

  createRenta(priceId: number) {
    return this._httpClient.post<any>(`${ environment.api }shop/createrenta`, {
      priceId
    }, { withCredentials: true });
  }
}
