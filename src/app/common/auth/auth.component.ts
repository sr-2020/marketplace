import { Component, OnInit } from '@angular/core'
import { SessionService } from '@services/session.service'
import { BehaviorSubject } from 'rxjs'
import { Corporation, Organisation, Session } from '@type'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'sr-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  organisation: Organisation
  organisations: (Organisation | Corporation)[] = []
  filterControl = new FormControl('')
  constructor(
    private _sessionService: SessionService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.session$.subscribe((session) => {
      if (!session) {
        return
      }
      this.organisations = [...session.shops, ...session.corporations]
    })
  }

  get organisation$(): BehaviorSubject<Organisation> {
    return this._sessionService.selectedOrg
  }

  get session(): Session {
    return this._sessionService.session
  }

  get session$(): BehaviorSubject<Session> {
    return this._sessionService.session$
  }

  selectOrg(org: Organisation) {
    this.organisation = org
  }

  changeOrganisation(shop: Organisation) {
    this._sessionService.changeOrg(shop)
    this._router.navigate(['/'])
  }

  isSelected(org: Organisation): boolean {
    if (!this.organisation) {
      return false
    }
    const { id, name } = this.organisation
    return name === org.name && id === org.id
  }

  logOut() {
    this._sessionService.logOut()
  }
}
