import { Component, OnInit } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Organisation } from '@type'

@Component({
  selector: 'sr-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  shopInfo = []

  constructor(private _session: SessionService) {}

  ngOnInit(): void {
    this._session.selectedOrg.subscribe((el: Organisation) => {
      // todo.dzu Сделать информацию как для магазинов так и для корпораций
      if (!el) {
        return
      }
      this.shopInfo = [
        {
          title: 'Название:',
          value: el.name,
        },
      ]
    })
  }
}
