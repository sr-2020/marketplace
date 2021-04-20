import { Component } from '@angular/core'
import { AppService } from '../app.service'
import { SessionService } from '@services/session.service'
import { Observable } from 'rxjs'
import { Organisation, Session } from '@type'

@Component({
  selector: 'sr-corp',
  templateUrl: './corp.component.html',
  styleUrls: ['./corp.component.scss'],
})
export class CorpComponent {
  constructor(
    private _appService: AppService,
    private _sessionService: SessionService
  ) {}

  get isMobile() {
    return this._appService.isMobile
  }
  get corp$(): Observable<Organisation> {
    return this._sessionService.selectedOrg
  }
  get session(): Session {
    return this._sessionService.session
  }
}
