import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service';
import { Observable } from 'rxjs';
import { ShopUnitModel } from '../../models/shop-unit.model';
import { ResponseModel } from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class GoodsListService {

  constructor(private _httpClient: HttpClient, private sessionService: SessionService) {
  }

  getGoodsList(): Observable<ResponseModel<ShopUnitModel[]>> {
    return this._httpClient.post<ResponseModel<ShopUnitModel[]>>(`${ environment.api }shop/getproducts`,
      { shop: this.sessionService.selectedShop.value?.id },
      // { withCredentials: true }
    );
  }
}
