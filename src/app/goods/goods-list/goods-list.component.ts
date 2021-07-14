import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { GoodsListService } from './goods-list.service'
import { ShopUnit, Sku } from '@type'
import { map } from 'rxjs/operators'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { BehaviorSubject } from 'rxjs'
import { MatAccordion } from '@angular/material/expansion'
import { PrintService } from '../../common/print/print.service'
import { AppService } from '../../app.service'
import { MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox'

@Component({
  selector: 'sr-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
  providers: [{
    provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: {
      clickAction: 'noop'
    }
  }]
})
export class GoodsListComponent implements AfterViewInit {
  shopList: ShopUnit[]
  goods$: BehaviorSubject<Sku[]>
  dataSource: MatTableDataSource<Sku>
  printMode = false
  isLoading = true
  error: any

  @ViewChild('listPaginator') paginator: MatPaginator
  @ViewChild(MatAccordion) accordion: MatAccordion

  goodsSchema: {title: string, prop: keyof Sku}[] = [
    {
      title: 'Название товара',
      prop: 'skuName'
    },
    {
      title: 'Корпорация',
      prop: 'corporationName'
    },
    {
      title: 'Лайфстайл',
      prop: 'lifeStyle'
    },
    {
      title: 'Название номенклатуры',
      prop: 'nomenklaturaName'
    },
    {
      title: 'Название специализации',
      prop: 'specialisationName'
    },
    {
      title: 'Базовая цена',
      prop: 'basePrice'
    }
  ]

  get printList() {
    return this._printService.getItems()
  }

  constructor(
    private _service: GoodsListService,
    private _appService: AppService,
    private _printService: PrintService
  ) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
    this.dataSource.paginator?.firstPage()
  }

  ngAfterViewInit(): void {
    this._printService.reset()
    this._service
      .getGoodsList()
      .pipe(map((el) => el.data))
      .subscribe((shopList) => {
        this.shopList = shopList
        this.dataSource = new MatTableDataSource<Sku>(
          this.shopList
            .filter(data => {
              const result = new RegExp('анлок', 'gi').test(data?.sku?.specialisationName)
              return !result
            })
            .map((el) => {
              return {
                qr: el.qr,
                qrid: el.qrid,
                ...el.sku
              }
            })
        )
        this.dataSource.paginator = this.paginator
        this.goods$ = this.dataSource.connect()
      })
  }

  togglePrintMode() {
    this.printMode = !this.printMode
    if (!this.printMode) {
      this._printService.reset()
    }
  }

  selectItemToPrint(e, good) {
    e.stopPropagation()
    const skuIdx = this.printList.findIndex((el) => {
      return el.skuId === good.skuId
    })
    if (skuIdx !== -1) {
      this._printService.removeItem(skuIdx)
      return
    }

    this._printService.pushItem(good)
  }

  isSelected(good) {
    return this.printList.findIndex((el) => {
      return el.skuId === good.skuId
    })
  }

  get isMobile() {
    return this._appService.isMobile
  }
}
