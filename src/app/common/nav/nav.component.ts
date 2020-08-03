import { Component, HostListener } from '@angular/core';
import { Command } from '@angular/cli/models/command';
import { Router } from '@angular/router';

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isMobile = window.innerWidth < 991;
  isOpen = false;
 constructor(private router: Router) {
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

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 991;
  }

  navigate(isDisable: boolean, commands: Command[]) {
    if (isDisable) { return; }
    this.router.navigate(commands);
  }
}
