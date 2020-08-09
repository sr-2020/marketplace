import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SessionModel } from '../models/session.model'
import { environment } from '../../environments/environment'
import { ResponseModel } from '../models/response.model'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  get session(): SessionModel {
    return this._session
  }

  set session(value: SessionModel) {
    this._session = value
  }

  private _session: SessionModel

  constructor(private httpClient: HttpClient) {
  }

  initSession() {
    this.httpClient.get<ResponseModel<SessionModel>>(`${ environment.api }Billing/info/getmyshops`, { withCredentials: true }).subscribe(
      {
        next: ({ data, message, status }) => {
          this._session = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }


}
