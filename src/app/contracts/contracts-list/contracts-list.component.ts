import { Component, OnInit } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Contract, ContractsListService } from './contracts-list.service'
import { FormControl } from '@angular/forms'
import { DialogComponent, DialogData } from '@shared/dialog/dialog.component'
import { MatDialog } from '@angular/material/dialog'
import { take } from 'rxjs/operators'
import { Router } from '@angular/router'

@Component({
  selector: 'sr-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.scss']
})
export class ContractsListComponent implements OnInit {
  loading = true
  _rawContracts: Contract[] = []
  filterCtrl = new FormControl('')
  statusFilter = new FormControl([])
  options = ['suggested', 'terminating', 'approved']

  constructor(private session: SessionService,
              private contractListService: ContractsListService,
              private dialog: MatDialog,
              private router: Router) {
  }

  get isShop(): boolean {
    return this.session.isShop
  }

  ngOnInit(): void {
    // this._rawContracts = mock
    // this.loading = false
    this.session.selectedOrg.subscribe(org => {
      if (this.isShop && org !== undefined && !org.isOwner) {
        this.router.navigate(['/404'])
      }
    })
    this.requestContract()
  }

  private requestContract() {
    this.loading = true
    this.contractListService.getContractList()
      .subscribe(el => {
        this._rawContracts = el.data
        this.loading = false
      })
  }

  getName(c: Contract) {
    return c.shopName || c.corporationName
  }

  get contracts() {
    const statusFiltered = this._rawContracts.filter(c => {
      if (this.statusFilter.value.length === 0) {
        return true
      } else {
        return !!~this.statusFilter.value.indexOf(c.status.toLowerCase())
      }
    })

    return statusFiltered
      .filter((c) => new RegExp(this.filterCtrl.value, 'gi')
        .test(this.isShop ? c.corporationName : c.shopName))
  }

  isApprovable(c: Contract) {
    return (this.isShop && c.status === 'Suggested') || (!this.isShop && c.status === 'Terminating')
  }

  isNotTerminatable(c: Contract) {
    return !this.isShop && c.status === 'Terminating'
  }

  approveContract(c: Contract) {
    const dialogOptions: DialogData = this.isShop
      ? {
        title: 'Подписание контракта',
        description: `Вы уверены, что хотите подписать контракт с корпорацией '${c.corporationName}'?`,
        confirmBtnText: `Подписать!`,
        successText: `Контракт подписан!`,
        confirmMethod: () => {
          return this.contractListService.approveContract(c)
        }
      }
      : {
        title: 'Отзыв расторжения',
        description: `Вы уверены, что хотите отозвать расторжение контракта с магазином '${c.shopName}'`,
        confirmBtnText: 'Отозвать!',
        successText: 'Расторжение отозвано!',
        confirmMethod: () => {
          return this.contractListService.suggestContract(c.shopId)
        }
      }

    const d = this.dialog.open(DialogComponent, { data: dialogOptions })
    d.afterClosed().pipe(take(1)).subscribe(el => {
      if (el === 'success') {
        this.requestContract()
      }
    })
  }

  terminateContract(c: Contract) {
    const isSuggested = c.status.toLowerCase() === 'suggested'
    const dialogOptions: DialogData = this.isShop
      ? {
        title: 'Расторжение контракта',
        description: `Вы уверены, что хотите ${isSuggested ? 'отказать корпорации' : 'расторгнуть контракт с корпорацей'}  '${c.corporationName}'?`,
        confirmBtnText: isSuggested ? 'Отказать!' : 'Расторгнуть!',
        successText: isSuggested ? 'Отказ отправлен!' : `Контракт расторгнут!`,
        confirmMethod: () => {
          return this.contractListService.terminateContract(c)
        }
      }
      : {
        title: 'Запрос на расторжение',
        description: `Вы уверены, что хотите ${isSuggested ? 'отозвать подписание' : 'запросить расторжение'} контракта с магазином '${c.shopName}'`,
        confirmBtnText: isSuggested ? 'Отозвать!' : 'Запросить!',
        successText: isSuggested ? 'Контракт отозван!' : 'Расторжение запрошено!',
        confirmMethod: () => {
          return this.contractListService.proposeContract(c)
        }
      }
    const d = this.dialog.open(DialogComponent, { data: dialogOptions })
    d.afterClosed().pipe(take(1)).subscribe(el => {
      if (el === 'success') {
        this.requestContract()
      }
    })
  }
}
