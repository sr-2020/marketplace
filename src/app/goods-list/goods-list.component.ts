import {Component, OnInit} from '@angular/core';
import {GoodsListService} from "./goods-list.service";

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  data: object[]

  constructor(private service: GoodsListService) {
  }

  ngOnInit(): void {
    this.data = this.service.getGoodsList()
  }

}
