import {Component, OnInit} from '@angular/core';
import {GoodsListService} from './goods-list.service';

@Component({
  selector: 'sr-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
})
export class GoodsListComponent implements OnInit {
  data: object[];
  isLoading = true;
  error: any;
  constructor(private service: GoodsListService) {
  }

  displayedColumns: string[] = ['id', 'name', 'lifestyle', 'actions'];

  ngOnInit(): void {
    this.service.getGoodsList().subscribe( el => {
      this.data = el;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    });
  }

}
