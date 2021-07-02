import { Component, OnInit } from '@angular/core'
import { HttpAdapterService } from '@shared/services/http-adapter.service'
import { Response } from '@type'
import { SessionService } from '@services/session.service'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'
import { ShopAccessService } from './shop-access.service'
import { MatSnackBar } from '@angular/material/snack-bar'


@Component({
  selector: 'sr-shop-access',
  templateUrl: './shop-access.component.html',
  styleUrls: ['./shop-access.component.scss']
})
export class ShopAccessComponent implements OnInit {
  users = []
  trustedUsers = []
  inputCtrl = new FormControl('')
  removable = true
  processing = false

  constructor(private _http: HttpAdapterService,
              private alert: MatSnackBar,
              private session: SessionService,
              private router: Router,
              private service: ShopAccessService) {
  }

  ngOnInit(): void {
    this._http.getReq<Response<any>>(['users']).subscribe(el => {
      this.users = el.data
    })

    this.session.selectedOrg.subscribe(org => {
      if (org) {
        this.trustedUsers = org.trustedUsers
      }
      if (this.isShop && org !== undefined && !org.isOwner) {
        this.router.navigate(['/404'])
      }
    })
  }

  get filteredOptions() {
    const value = this.inputCtrl.value
    return this.users.filter(option => new RegExp(value.trim(), 'ig').test(option.name))
  }
  get isShop(): boolean {
    return this.session.isShop
  }

  selected($event: MatAutocompleteSelectedEvent) {
    if (this.trustedUsers.map(el => el.toString()).indexOf($event.option.value) === -1) {
      this.trustedUsers.push($event.option.value)
      this.processing = true
      this.service
        .updateTrustedUsers(this.trustedUsers)
        .subscribe(() => {
          this.session.initSession()
          this.alert.open('Пользователь добавлен в доверенных')
          this.processing = false
        } )
    }
    this.inputCtrl.patchValue('')
  }

  getUserName(id: string) {
    return this.users.find(user => {
      return user.modelId === id.toString()})?.name
  }

  onRemove(user: string) {
    const index = this.trustedUsers.indexOf(user)

    if (index >= 0) {
      this.trustedUsers.splice(index, 1)
      this.processing = true
      this.service
        .updateTrustedUsers(this.trustedUsers)
        .subscribe(() => {
          this.alert.open('Пользователь убран из доверенных')
          this.session.initSession()
          this.processing = false
        } )
    }

  }
}
