import { Component, OnInit } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Contract, ContractsListService } from './contracts-list.service'
import { mock } from './ContractsMock'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'sr-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.scss']
})
export class ContractsListComponent implements OnInit {
  loading = true
  _rawContracts: Contract[] = []
  filterCtrl = new FormControl('')
  statusFilter = new FormControl('All')
  options = ['All', 'Suggested', '', '']
  constructor(private session: SessionService, private contractListService: ContractsListService) { }

  get isShop(): boolean {
    return this.session.isShop
  }

  ngOnInit(): void {
    this._rawContracts = mock
    this.loading = false
    // this.contractListService.getContractList().subscribe(el => {
    //   this._rawContracts = el.data
    //   this.loading = false
    // }) // todo раскоментить когда сверстаю
  }

  get contracts() {
    return this._rawContracts.filter(() => true) // todo add filter
  }
}
