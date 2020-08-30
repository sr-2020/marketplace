import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Observable } from 'rxjs';
import { ShopModel } from '../models/shop.model';
import { SessionModel } from '../models/session.model';
import { Router } from '@angular/router';

@Component({
  selector: 'sr-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  shop: ShopModel;

  constructor(private _sessionService: SessionService, private _router: Router) {
  }

  ngOnInit(): void {
  }

  get shop$(): Observable<ShopModel> {
    return this._sessionService.selectedShop;
  }

  get session(): SessionModel {
    return this._sessionService.session;
  }

  changeShop(shop: ShopModel) {
    this._sessionService.changeShop(shop);
    this._router.navigate(['/', 'goods']);

  }
}

