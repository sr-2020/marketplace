import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  private _itemsToPrint: any[] = [];

  public pushItem(item) {
    this._itemsToPrint.push(item);
  }

  public removeItem(itemIndex) {
    this._itemsToPrint.splice(itemIndex, 1);
  }

  public reset() {
    this._itemsToPrint = [];
  }

  public getItems() {
    return this._itemsToPrint;
  }

  constructor() {
  }
}
