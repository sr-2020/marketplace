import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SessionService } from './services/session.service';
import { ShopModel } from './models/shop.model';
import { SessionModel } from './models/session.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _appService: AppService, private _sessionService: SessionService, public http: HttpClient) {
  }

  ngOnInit(): void {
    this._sessionService.initSession();
  }

  get selectedShop(): ShopModel {
    return this._sessionService.selectedShop.value;
  }

  get session(): SessionModel {
    return this._sessionService.session;
  }


  @HostListener('window:resize')
  onResize() {
    this._appService.isMobile = window.innerWidth < 767;
  }

}
