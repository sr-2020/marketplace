import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  get isMobile(): boolean {
    return this._isMobile;
  }

  set isMobile(value: boolean) {
    this._isMobile = value;
  }

  private _isMobile: boolean;

  constructor() {
  }


}
