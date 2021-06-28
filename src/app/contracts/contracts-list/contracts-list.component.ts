import { Component, OnInit } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Contract, ContractsListService } from './contracts-list.service'

@Component({
  selector: 'sr-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.scss']
})
export class ContractsListComponent implements OnInit {
  loading = true
  _rawContracts: Contract[] = []
  constructor(private session: SessionService, private contractListService: ContractsListService) { }

  get isShop(): boolean {
    return this.session.isShop
  }

  ngOnInit(): void {
    this.contractListService.getContractList().subscribe(el => {
      this._rawContracts = el.data
      this.loading = false
    })
  }

  get contracts() {
    return this._rawContracts.filter(() => true) // todo add filter
  }
}
