import { Component, OnInit } from '@angular/core'
import { SessionService } from '../services/session.service'
import { Observable } from 'rxjs'
import { Session, Shop } from '@type'
import { Router } from '@angular/router'

@Component({
  selector: 'sr-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  shop: Shop

  constructor(
    private _sessionService: SessionService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  get shop$(): Observable<Shop> {
    return this._sessionService.selectedShop
  }

  get session(): Session {
    return this._sessionService.session
  }

  changeShop(shop: Shop) {
    this._sessionService.changeShop(shop)
    this._router.navigate(['/', 'goods'])
  }

  logOut() {
    this._sessionService.logOut()
  }
}
