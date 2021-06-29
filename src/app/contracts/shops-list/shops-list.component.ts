import { Component, OnInit } from '@angular/core'
import { ContractsListService } from '../contracts-list/contracts-list.service'
import { switchMap } from 'rxjs/operators'
import { Shop } from '@type'
import { FormControl } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent, DialogData } from '@shared/dialog/dialog.component'

@Component({
  selector: 'sr-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss']
})
export class ShopsListComponent implements OnInit {
  loading = true
  shopList: (Shop & { haveContract: boolean })[] = []
  filterCtrl = new FormControl('')

  constructor(private service: ContractsListService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.service.getShopList().pipe(switchMap(shops => {
      this.shopList = shops.data as (Shop & { haveContract: boolean })[]
      return this.service.getContractList()
    })).subscribe(
      c => {
        this.shopList = this.shopList.map(shop => {
          return {
            ...shop,
            haveContract: !!c.data.find(contract => contract.shopId === shop.id)
          }
        }).filter(shop => shop.specialisations.length > 0)
        this.loading = false
      }
    )
  }

  get shops() {
    return this.shopList.filter(shop => new RegExp(this.filterCtrl.value, 'ig').test(shop.name))
  }

  suggestContract(shop: Shop) {
    this.dialog.open<DialogComponent, DialogData>(DialogComponent, {
      data: {
        title: 'Заключение контракта',
        description: `Вы уверены что хотите заключить контракт с магазином '${shop.name}'?`,
        successText: `Отправлен запрос на заключение контракта с магазином '${shop.name}'`,
        confirmBtnText: 'Заключить',
        confirmMethod: () => {
          return this.service.suggestContract(shop.id)
        }
      }
    })
  }
}
