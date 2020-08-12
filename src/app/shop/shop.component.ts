import { Component } from '@angular/core';
import { SessionModel } from '../models/session.model';
import { AppService } from '../app.service';
import { SessionService } from '../services/session.service';
import { Observable } from 'rxjs';
import { ShopModel } from '../models/shop.model';

@Component({
  selector: 'sr-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  constructor(private _appService: AppService, private _sessionService: SessionService) {
  }

  get isMobile() {
    return this._appService.isMobile;
  }
  get shop$(): Observable<ShopModel> {
    return this._sessionService.selectedShop;
  }
  get session(): SessionModel {
    return this._sessionService.session;
  }
}
