import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'sr-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, AfterViewInit{
  transactionList: any;
  dataSource: MatTableDataSource<any>;
  list$: Observable<any>;
  constructor(private service: TransactionsService) {
  }
  @ViewChild('listPaginator') paginator: MatPaginator;
  ngOnInit(): void {
    this.transactionList = this.service.getTransactionList();
    this.dataSource = new MatTableDataSource<any>(this.transactionList);
    this.list$ = this.dataSource.connect();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
