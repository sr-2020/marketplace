import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { SessionService } from '../services/session.service'

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private _httpClient: HttpClient, private _session: SessionService) {
  }

  getRenta(id:string ) {
    return this._httpClient.post<any>(`${ environment.api }shop/createpricebyqr`, {
      character: this._session.session.currentCharacterId,
      qr: id
    })
  }
}
