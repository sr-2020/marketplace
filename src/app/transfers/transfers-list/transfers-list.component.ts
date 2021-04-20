import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core'
import { TransferService } from '../transfer.service'
import { MatTableDataSource } from '@angular/material/table'
import { BehaviorSubject } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator'
import { AppService } from '../../app.service'
import { Transfer } from '../../models/transfer'
import { MatAccordion } from '@angular/material/expansion'

@Component({
  selector: 'sr-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss'],
})
export class TransfersListComponent implements OnInit, AfterViewInit {
  transfersList: Transfer[]
  dataSource: MatTableDataSource<Transfer>
  list$: BehaviorSubject<Transfer[]>
  isLoading = true
  constructor(
    private _service: TransferService,
    private _appService: AppService,
    private _cdr: ChangeDetectorRef
  ) {}

  @ViewChild('listPaginator') paginator: MatPaginator
  @ViewChild(MatAccordion) accordion: MatAccordion
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this._service.getTransferList().subscribe(({ data }) => {
      this.transfersList = data
      this.dataSource = new MatTableDataSource<any>(this.transfersList)
      this.list$ = this.dataSource.connect()
      this.dataSource.paginator = this.paginator
      this.isLoading = false
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value

    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  get isMobile() {
    return this._appService.isMobile
  }
}
