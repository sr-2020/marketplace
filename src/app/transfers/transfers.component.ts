import { Component, OnInit } from '@angular/core'
import { SessionService } from '@services/session.service'
import { Router } from '@angular/router'

@Component({
  selector: 'sr-transactions',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {
  constructor(private session: SessionService, private router: Router) {}

  ngOnInit(): void {
    this.session.selectedOrg.subscribe(org => {

      if (this.isShop && org !== undefined && !org.isOwner) {
        this.router.navigate(['/404'])
      }
    })
  }

  get isShop(): boolean {
    return this.session.isShop
  }
}
