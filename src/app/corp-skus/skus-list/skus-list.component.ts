import { Component, OnInit, ViewChild } from '@angular/core'
import { SkusListService } from './skus-list.service'
import { Sku } from '@type'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { BehaviorSubject } from 'rxjs'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'sr-skus-list',
  templateUrl: './skus-list.component.html',
  styleUrls: ['./skus-list.component.scss']
})
export class SkusListComponent implements OnInit {
  loading = true
  filterCtrl = new FormControl({ value: '', disabled: true })
  skus$: BehaviorSubject<Sku[]>
  dataSource: MatTableDataSource<Sku>
  @ViewChild('listPaginator') paginator: MatPaginator

  constructor(private service: SkusListService) {
  }

  schema = [
    { title: 'Количество', prop: 'count' },
    { title: 'Базовая цена', prop: 'basePrice' },
    { title: 'Номенклатура', prop: 'nomenklaturaName' },
    { title: 'Тип продукта', prop: 'productTypeName'},
    { title: 'Тип', prop: 'discountType' },
    { title: 'Лайфстайл', prop: 'lifeStyle'},
    { title: 'Описание', prop: 'description'}
  ]

  ngOnInit(): void {
    this.filterCtrl.valueChanges.subscribe((value: string) => {
      if (this.dataSource) {
        this.dataSource.filter = value.trim().toLowerCase()
        this.dataSource?.paginator?.firstPage()
      }
    })

    this.service.getSkus$().subscribe(skus => {
      this.filterCtrl.enable()
      this.dataSource = new MatTableDataSource(skus)
      this.dataSource.paginator = this.paginator
      this.skus$ = this.dataSource.connect()
      this.loading = false
    })
  }

}
