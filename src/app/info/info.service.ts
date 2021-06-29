import { Injectable } from '@angular/core'
import { HttpAdapterService } from '@shared/services/http-adapter.service'
import { pluck } from 'rxjs/operators'
import { Response, Specialisation } from '@type'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpAdapterService) {
  }

  getSpecialisations(): Observable<Response<Specialisation[]>> {
    return this.http.getReq<Response<Specialisation[]>>(['specialisations'])
  }
}
