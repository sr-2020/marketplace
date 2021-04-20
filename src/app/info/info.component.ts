import { Component, OnInit } from '@angular/core'
import { SessionService } from '../services/session.service'
import { Shop } from '@type'
import { LifestylePipe } from '../shared/pipes/lifestyle.pipe'

@Component({
  selector: 'sr-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  shopInfo = []

  constructor(private _session: SessionService) {}

  ngOnInit(): void {
    this._session.selectedShop.subscribe((el: Shop) => {
      this.shopInfo = [
        {
          title: 'ID:',
          value: el.id,
        },
        {
          title: 'Название:',
          value: el.name,
        },
        {
          title: 'ID владельца:',
          value: el.ownerId,
        },
        {
          title: 'Баланс:',
          value: el.balance,
          price: true,
        },
        {
          title: 'Лайфстайл:',
          value: new LifestylePipe().transform(el.lifestyle),
        },
      ]
    })
  }
}
