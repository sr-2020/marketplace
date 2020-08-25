import { Component, OnInit } from '@angular/core';
import { PrintService } from './print.service';

@Component({
  selector: 'sr-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  constructor(private _printService: PrintService) {
  }

  ngOnInit(): void {
  }

  get dataToPrint() {
    return this._printService.getItems();
  }
}
