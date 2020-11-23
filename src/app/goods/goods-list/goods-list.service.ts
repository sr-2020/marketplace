import { Injectable } from '@angular/core'
import { SessionService } from '../../services/session.service'
import { Observable } from 'rxjs'
import { ShopUnitModel } from '../../models/shop-unit.model'
import { ResponseModel } from '../../models/response.model'
import { HttpAdapterService } from '../../shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root'
})
export class GoodsListService {

  constructor(private _http: HttpAdapterService, private sessionService: SessionService) {
  }

  getGoodsList(): Observable<ResponseModel<ShopUnitModel[]>> {
    return this._http.postReq<ResponseModel<ShopUnitModel[]>>(['shop', 'getproducts'],
      { shop: this.sessionService.selectedShop.value?.id }
    )
  }
}
