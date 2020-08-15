import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsListService {

  constructor(private _httpClient: HttpClient, private sessionService: SessionService) {
  }

  getGoodsList(): Observable<any> {
    return this._httpClient.post(`${ environment.api }shop/getproducts`,
      { shop: this.sessionService.selectedShop.value?.id },
      { withCredentials: true }
    );
  }
}
