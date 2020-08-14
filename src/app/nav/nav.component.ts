import { Component, EventEmitter, Output } from '@angular/core';
import { Command } from '@angular/cli/models/command';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { NavService } from './nav.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() linkSelected = new EventEmitter<null>();
  constructor(private router: Router,
              private _appService: AppService,
              private _navService: NavService,
              private _sessionService: SessionService) {
  }

  navBarSchema = [
    {
      name: 'Информация',
      routerLink: 'info',
      disabled: false
    },
    {
      name: 'Переводы',
      routerLink: 'transactions'
    },
    {
      name: 'Контракты',
      routerLink: 'contracts',
      disabled: true

    },
    {
      name: 'Доступные товары',
      routerLink: 'goods',
    },
    {
      name: 'Купленные товары',
      routerLink: 'basket',
      disabled: false
    },
    {
      name: 'Доступы',
      routerLink: 'permissions',
      disabled: true
    },
  ];

  get isMobile() {
    return this._appService.isMobile;
  }

  get isOpen() {
    return this._navService.isOpen;
  }

  get currentShop() {
    return this._sessionService.selectedShop.value;
  }

  close() {
    this._navService.isOpen = false;
  }

  navigate(commands: Command[]) {
    this.router.navigate(['/', this.currentShop.id, ...commands]);
    this.linkSelected.emit();
  }
}
