import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionModel } from '../models/session.model';
import { environment } from '../../environments/environment';
import { ResponseModel } from '../models/response.model';
import { ShopModel } from '../models/shop.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  selectedShop = new BehaviorSubject<ShopModel>(undefined);

  get session(): SessionModel {
    return this._session.value;
  }

  get session$(): BehaviorSubject<SessionModel> {
    return this._session;
  }

  private _session = new BehaviorSubject<SessionModel>(null);

  constructor(private httpClient: HttpClient, private _router: Router) {
  }

  initSession() {
    this.httpClient.get<ResponseModel<SessionModel>>(`${ environment.api }shop/getmyshops`, {
      headers: {
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NTgyNyIsImF1dGgiOiJST0xFX1BMQVlFUiIsIm1vZGVsSWQiOjU1ODI3LCJjaGFyYWN0ZXJJZCI6OTQyLCJleHAiOjE2MDUxMTM5ODR9.VKWIbGnWtvOhmcYzxst-nV6n1JEMzEH37a_OAmwrrwIlJ7XJ7mkWLb-IGYYlPTXdEC5DYf1YxBEGsFCQ3VFDyw`,
        'x-user-id': '51629',
      }, withCredentials: true
    }).subscribe(
      {
        next: ({ data }) => {
          this._session.next(data);
          this._selectCurrentShop(data);
        },
        error: (err) => {
          console.log(err);
        }
      }
    );

    this.selectedShop.subscribe((shop: ShopModel) => {
      if (!shop) {
        return;
      }
      window.localStorage.setItem('shopId', shop.id.toString());
    });
  }

  private _selectCurrentShop(data: SessionModel) {
    const shopId = +window.localStorage.getItem('shopId');
    if (!data.shops.find((el) => el?.id === shopId)) {
      window.localStorage.removeItem('shopId');
      this.selectedShop.next(null);
      return;
    }
    this.selectedShop.next(data.shops.find((el) => el?.id === shopId));
  }

  public changeShop(shop) {
    this.selectedShop.next(shop);
  }

}
