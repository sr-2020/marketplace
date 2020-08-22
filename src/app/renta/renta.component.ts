import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';
import { RentaQrPopupComponent } from './renta-qr-popup/renta-qr-popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RentaService } from './renta.service';
import { RentaModel } from '../models/renta.model';
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'sr-basket',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.scss']
})
export class RentaComponent implements AfterViewInit {
  rentas: RentaModel[];
  rentas$: BehaviorSubject<RentaModel[]>;
  dataSource: MatTableDataSource<RentaModel>;
  @ViewChild('listPaginator') paginator: MatPaginator;
  rentasSchema = [
    {
      title: 'Корпорация',
      prop: 'corporation'
    },
    {
      title: 'Магазин',
      prop: 'shop'
    },
    {
      title: 'Окончательная цена',
      prop: 'finalPrice',
      price: true
    },
    {
      title: 'Название номенклатуры',
      prop: 'nomenklaturaName'
    },
    {
      title: 'Тип товара',
      prop: 'productType'
    },
  ];

  constructor(private _appService: AppService,
              private _rentaService: RentaService,
              private _dialog: MatDialog,
              private _matSnackBar: MatSnackBar) {
  }

  ngAfterViewInit() {
    this._rentaService.getRentas().subscribe(el => {
      this.rentas = el.data;
      this.dataSource = new MatTableDataSource(el.data);
      this.dataSource.paginator = this.paginator;
      this.rentas$ = this.dataSource.connect();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openScanDialog(i: RentaModel) {
    const dialogRef = this._dialog.open(RentaQrPopupComponent, { data: i });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this._rentaService.setQR(result.code, result.rentaId).subscribe(
        (el) => {
          this._matSnackBar.open(`QR: ${ result.code } связан с предметом ${ result.skuName }`, '', {
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        },
        ({ error }) => {
          this._matSnackBar.open(`Ошибка записи: ${ error.message }`, '', {
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        });


    });
  }
}
