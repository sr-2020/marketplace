import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GoodsListService } from './goods-list.service';
import { ShopUnitModel } from '../../models/shop-unit.model';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GoodsQrPopupComponent } from '../goods-qr-popup/goods-qr-popup.component';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'sr-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
})
export class GoodsListComponent implements AfterViewInit {
  shopList: ShopUnitModel[];
  goods$: BehaviorSubject<any>;
  dataSource: MatTableDataSource<any>;
  isLoading = true;
  error: any;

  @ViewChild('listPaginator') paginator: MatPaginator;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  goodsSchema = [
    {
      title: 'Корпорация',
      prop: 'corporationName'
    },
    {
      title: 'Название номенклатуры',
      prop: 'nomenklaturaName'
    },
    {
      title: 'Базовая цена',
      prop: 'basePrice',
      price: true
    },
    {
      title: 'Тип товара',
      prop: 'productTypeName'
    },
  ];

  constructor(private service: GoodsListService, private _dialog: MatDialog) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.service.getGoodsList().pipe(map(el => el.data)).subscribe(shopList => {
      this.shopList = shopList;
      this.dataSource = new MatTableDataSource<any>(this.shopList.map(el => {
        return {
          qr: el.qr,
          qrid: el.qrid,
          ...el.sku
        };
      }));
      this.dataSource.paginator = this.paginator;
      this.goods$ = this.dataSource.connect();
    });
  }

  openScanDialog(event, qr: string) {
    event.stopPropagation();
    this._dialog.open(GoodsQrPopupComponent, { data: qr });
  }
}
