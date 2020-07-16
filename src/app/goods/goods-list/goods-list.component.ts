import {Component, OnInit} from '@angular/core';
import {GoodsListService} from './goods-list.service';

@Component({
  selector: 'sr-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
})
export class GoodsListComponent implements OnInit {
  data: object[];

  constructor(private service: GoodsListService) {
  }

  displayedColumns: string[] = ['id', 'name', 'lifestyle', 'actions'];

  ngOnInit(): void {
    this.data = this.service.getGoodsList();
  }

}
