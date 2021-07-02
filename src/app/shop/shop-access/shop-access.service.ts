import { Injectable } from '@angular/core'
import { HttpAdapterService } from '@shared/services/http-adapter.service'

@Injectable({
  providedIn: 'root'
})
export class ShopAccessService {

  constructor(private _http: HttpAdapterService) { }

}
