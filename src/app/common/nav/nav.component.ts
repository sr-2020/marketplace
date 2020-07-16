import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isMobile = window.innerWidth < 991;
  isOpen = false;

  navBarSchema = [
    {
      name: 'Информация',
      routerLink: 'info'
    },
    {
      name: 'Переводы',
      routerLink: 'transactions'
    },
    {
      name: 'Контракты',
      routerLink: 'contracts'
    },
    {
      name: 'Доступные товары',
      routerLink: 'goods'
    },
    {
      name: 'Купленные товары',
      routerLink: 'basket'
    },
    {
      name: 'Доступы',
      routerLink: 'permissions'
    },
  ];

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 991;
  }
}
