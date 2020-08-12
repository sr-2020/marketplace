import { Component, OnInit } from '@angular/core';
import mockData from './basket-list.mock';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';
import { BasketQrPopupComponent } from './basket-qr-popup/basket-qr-popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'sr-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  mock = mockData;

  constructor(private _appService: AppService, private _dialog: MatDialog, private _matSnackBar: MatSnackBar) {
  }

  displayedColumns: string[] = ['id', 'name', 'lifestyle', 'actions'];

  ngOnInit(): void {
  }

  get isMobile(): boolean {
    return this._appService.isMobile;
  }

  openScanDialog(i: any) {
    const dialogRef = this._dialog.open(BasketQrPopupComponent, { data: i });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this._matSnackBar.open(`QR: ${ result.code } связан с предметом ${ result.name }`, '', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
  }
}
