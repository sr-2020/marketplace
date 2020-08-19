import { Component, OnInit } from '@angular/core';
import { GoodsListService } from './goods-list.service';
import { ShopUnitModel } from '../../models/shop-unit.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'sr-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
})
export class GoodsListComponent implements OnInit {
  shopList$: Observable<ShopUnitModel[]>;
  isLoading = true;
  error: any;

  constructor(private service: GoodsListService) {
  }

  displayedColumns: string[] = ['id', 'name', 'lifestyle', 'actions'];

  ngOnInit(): void {
    this.shopList$ = this.service.getGoodsList().pipe(map(el => el.data));
  }
}
