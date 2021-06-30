import { Injectable } from '@angular/core'
import { HttpAdapterService } from '@shared/services/http-adapter.service'
import { SessionService } from '@services/session.service'
import { Observable } from 'rxjs'
import { Sku } from '@type'
import { pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SkusListService {

  constructor(private http: HttpAdapterService, private session: SessionService) {}

  getSkus$(): Observable<any> {
    return this.http.postReq<Sku[]>(['shop', 'getcorporationproducts'], {
      corporation: this.session.selectedOrg.value.id
    }).pipe(pluck('data'))
  }
}
