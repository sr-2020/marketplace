import { Component, OnInit } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Organisation, Specialisation } from '@type'
import { LifestylePipe } from '@shared/pipes/lifestyle.pipe'
import { InfoService } from './info.service'
import { map, pluck } from 'rxjs/operators'
import { of } from 'rxjs'

@Component({
  selector: 'sr-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  shopInfo = []
  specs$ = of<Specialisation[]>([])
  constructor(private _session: SessionService, private _service: InfoService) {}

  ngOnInit(): void {
    this._session.selectedOrg.subscribe((org: Organisation) => {
      // todo.dzu Сделать информацию как для магазинов так и для корпораций
      if (!org) {
        return
      }

      const isShop = org.corporationUrl === undefined

      let info: {title: string, value: string | number | any[]}[]
      if (isShop) {
        const unlockRegexp = new RegExp('анлок', 'gi')
        this.specs$ = this._service.getSpecialisations().pipe(
          pluck('data'),
          map(spec => {
            return spec
              .filter(e => ~org.specialisations.indexOf(e.id))
              .filter(specialisation => {
              return !unlockRegexp.test(specialisation?.name)
            })

          })
        )
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
            value: org.specialisations,
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
            value: org.lastSkuSold + ' ¥',
          },
          {
            title: 'Продано товаров за текущий цикл:',
            value: org.currentSkuSold + ' ¥',
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
