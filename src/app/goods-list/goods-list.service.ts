import { Injectable } from '@angular/core';
import  mockData from './good-list'
@Injectable({
  providedIn: 'root'
})
export class GoodsListService {

  constructor() { }

  getGoodsList() {
    return mockData
  }
}
