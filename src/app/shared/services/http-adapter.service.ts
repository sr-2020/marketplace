import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export type URLCommand = string[]

const ALLOW_UNAUTHORIZED_ACCESS: string[] = []

@Injectable({
  providedIn: 'root'
})
export class HttpAdapterService {

  constructor(private http: HttpClient) {
    if (environment.production && !HttpAdapterService.isAuthorized(document.cookie)) {
      if (~ALLOW_UNAUTHORIZED_ACCESS.indexOf(document.location.pathname)) {
        const redirectedFrom = document.location.href
        document.location.href = `http://web.evarun.ru/login?externalUrl=${ redirectedFrom }`
      }
    }
  }

  private static get options() {
    let headers = {}

    if (!environment.production) {
      headers = {
        'x-user-id': '51629'
      }
    }
    console.log(headers)
    return { headers, withCredentials: true }
  }

  private static getURL(cmd: URLCommand): string {
    return environment.api + cmd.join('/')
  }

  private static isAuthorized(cookie: string): boolean {
    return !!cookie && /Authorisation/gi.test(cookie)
  }

  getReq<T>(command: URLCommand): Observable<T> {
    return this.http.get(HttpAdapterService.getURL(command), HttpAdapterService.options) as Observable<T>
  }

  postReq<T>(command: URLCommand, body: object): Observable<T> {
    return this.http.post(HttpAdapterService.getURL(command), body, HttpAdapterService.options) as Observable<T>
  }
}
