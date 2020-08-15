import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ShopModel } from '../models/shop.model';
import { LifestylePipe } from '../shared/pipes/lifestyle.pipe';

@Component({
  selector: 'sr-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  shopInfo = [];

  constructor(private _session: SessionService) {
  }

  ngOnInit(): void {
    this._session.selectedShop.subscribe((el: ShopModel) => {
      this.shopInfo = [
        {
          title: 'Название:',
          value: el.name
        },
        {
          title: 'Баланс:',
          value: el.balance
        },
        {
          title: 'Комиссия:',
          value: el.commission
        },
        {
          title: 'Лайфстайл:',
          value: new LifestylePipe().transform(el.lifestyle)
        }
      ];
    });

  }

}
