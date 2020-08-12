import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionModel } from '../models/session.model';
import { environment } from '../../environments/environment';
import { ResponseModel } from '../models/response.model';
import { ShopModel } from '../models/shop.model';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  selectedShop = new BehaviorSubject<ShopModel>(null);

  get session(): SessionModel {
    return this._session;
  }

  set session(value: SessionModel) {
    this._session = value;
  }

  private _session: SessionModel;

  constructor(private httpClient: HttpClient, private _router: Router) {
  }

  initSession() {
    this.httpClient.get<ResponseModel<SessionModel>>(`${ environment.api }Billing/info/getmyshops`, { withCredentials: true }).subscribe(
      {
        next: ({ data }) => {
          this._session = data;

          if (data.shops.length) {
            this.selectedShop.next(data.shops[0]);
          }
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }


  getHero(id: string) {

  }
}
