import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SessionService } from './services/session.service';
import { SessionModel } from './models/session.model';

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _appService: AppService, private _sessionService: SessionService) {
  }

  get isMobile() {
    return this._appService.isMobile;
  }

  ngOnInit(): void {
    this._sessionService.initSession();
  }

  @HostListener('window:resize')
  onResize() {
    this._appService.isMobile = window.innerWidth < 767;
  }

  get session(): SessionModel {
    return this._sessionService.session;
  }

}
