import { Component, OnInit } from '@angular/core';
import mockData from './basket-list.mock';
import { AppService } from '../app.service';

@Component({
  selector: 'sr-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  mock = mockData;

  constructor(private _appService: AppService) {
  }

  displayedColumns: string[] = ['id', 'name', 'lifestyle', 'actions'];

  ngOnInit(): void {
  }

  get isMobile(): boolean {
    return this._appService.isMobile;
  }

  translateState(state) {
    const s = ['Запись недоступна', 'Записать код', 'Код уже записан'];
    return s[state] ? s[state] : 'Неизвестное состояние';
  }
}
