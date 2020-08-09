import { Component, HostListener, OnInit } from '@angular/core'
import { AppService } from './app.service';
import { SessionService } from './services/session.service'

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private _appService: AppService, private _sessionService: SessionService) {}
  ngOnInit(): void {
    this._sessionService.initSession()
  }

  @HostListener('window:resize')
  onResize() {
    this._appService.isMobile = window.innerWidth < 767;
  }


}
