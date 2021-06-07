import { Component, OnInit } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Organisation } from '@type'
import { LifestylePipe } from '@shared/pipes/lifestyle.pipe'

@Component({
  selector: 'sr-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  shopInfo = []

  constructor(private _session: SessionService) {}

  ngOnInit(): void {
    this._session.selectedOrg.subscribe((org: Organisation) => {
      // todo.dzu Сделать информацию как для магазинов так и для корпораций
      if (!org) {
        return
      }

      const isShop = org.corporationUrl === undefined
      let info = []
      if (isShop) {
        info = [
          {
            title: 'Lifestyle:',
            value: new LifestylePipe().transform(org.lifestyle),
          },
          {
            title: 'Баланс:',
            value: org.balance + ' ¥' ,
          },
          {
            title: 'Локация:',
            value: org.location ? org.location : 'Нет локации',
          },
          {
            title: 'Специализации:',
            value: 'TBI',
          },
          {
            title: 'Комментарий:',
            value: org.comment,
          },
        ]
      } else {
        info = [
          {
            title: 'KPI за прошедший цикл:',
            value: org.lastKPI + ' ¥' ,
          },
          {
            title: 'KPI за текущий цикл:',
            value: org.currentKPI + ' ¥' ,
          },
          {
            title: 'Продано товаров за прошедший цикл:',
            value: org.lastSkuSold,
          },
          {
            title: 'Продано товаров за текущий цикл:',
            value: org.currentSkuSold,
          },
        ]
      }
      this.shopInfo = [
        {
          title: 'ID:',
          value: org.id,
        },
        {
          title: 'Название:',
          value: org.name,
        },
        ...info
      ]
    })
  }
}
