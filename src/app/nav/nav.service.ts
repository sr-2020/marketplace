import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NavService {
  get isOpen(): boolean {
    return this._isOpen
  }

  set isOpen(value: boolean) {
    this._isOpen = value
  }

  private _isOpen = false

  toggleNavBar() {
    this.isOpen = !this.isOpen
  }
}
