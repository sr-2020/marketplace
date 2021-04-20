import { Injectable } from '@angular/core'
import { SessionService } from '../../services/session.service'
import { Observable } from 'rxjs'
import { ShopUnit } from '../../models/shop.unit'
import { Response } from '../../models/response'
import { HttpAdapterService } from '../../shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root',
})
export class GoodsListService {
  constructor(
    private _http: HttpAdapterService,
    private sessionService: SessionService
  ) {}

  getGoodsList(): Observable<Response<ShopUnit[]>> {
    return this._http.postReq<Response<ShopUnit[]>>(
      ['shop', 'getproducts'],
      { shop: this.sessionService.selectedShop.value?.id }
    )
  }
}
