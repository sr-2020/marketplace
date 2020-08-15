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
    return this._session;
  }

  set session(value: SessionModel) {
    this._session = value;
  }

  private _session: SessionModel;

  constructor(private httpClient: HttpClient, private _router: Router) {
  }

  initSession() {
    this.httpClient.get<ResponseModel<SessionModel>>(`${ environment.api }shopmanager/getmyshops`, { withCredentials: true }).subscribe(
      {
        next: ({ data }) => {
          this._session = data;
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
      const routePath = this._router.url.split('/').slice(2);
      this._router.navigate(['/', shop.id, ...routePath]);
    });
  }

  private _selectCurrentShop(data: SessionModel) {
    const urlCommands = this._router.url.split('/');
    const shopIdFromLink = urlCommands[1];
    this.selectedShop.next(data.shops.find((el) => el?.id === +shopIdFromLink));
  }

  public changeShop(shop) {
    this.selectedShop.next(shop);
    this._router.navigate(['/', this.selectedShop.value.id]);
  }

  public getShopFromLinkId(id: string): ShopModel {
    if (isNaN(+id) || id === '') {
      this._router.navigate(['/']);
      return;
    }
  }
}
