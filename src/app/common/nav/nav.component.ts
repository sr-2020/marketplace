import { Component } from '@angular/core';
import { Command } from '@angular/cli/models/command';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isOpen = false;

  constructor(private router: Router, private _appService: AppService) {
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
      disabled: true
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

  navigate(isDisable: boolean, commands: Command[]) {
    if (isDisable) {
      return;
    }
    this.router.navigate(commands);
  }
}
