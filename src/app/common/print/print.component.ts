import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { PrintService } from './print.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'sr-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent implements OnInit {
  constructor(
    private _printService: PrintService,
    private _location: Location
  ) {}
  ratio = 25
  ratioCtrl = new FormControl('25')
  ngOnInit(): void {}

  get dataToPrint() {
    return this._printService.getItems()
  }

  back() {
    this._location.back()
  }
}
