import { Component } from '@angular/core';
import { Command } from '@angular/cli/models/command';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { NavService } from './nav.service';

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private router: Router, private _appService: AppService, private _navService: NavService) {
  }

  navBarSchema = [
    {
      name: 'Информация',
      routerLink: 'info',
      disabled: true
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

  navigate(isDisable: boolean, commands: Command[]) {
    if (isDisable) {
      return;
    }
    this.router.navigate(commands);
  }
}
