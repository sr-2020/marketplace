import { Component, OnInit } from '@angular/core'
import { OfferService } from './offer.service'
import { ActivatedRoute } from '@angular/router'
import { SessionService } from '../services/session.service'
import { Offer } from '@type'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'sr-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  offerId: string
  offer: Offer
  offerCompleted = false
  errorMsg: string
  isLoading = true
  isProcessing = false

  constructor(
    private _offerService: OfferService,
    private _route: ActivatedRoute,
    private _session: SessionService,
    private _snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.offerId = this._route.snapshot.params?.id
    this.session$.subscribe((session) => {
      if (!session) {
        return
      }
      this.getOffer(this.offerId)
    })
  }

  getOffer(id: string) {
    this._offerService.getRenta(id).subscribe(
      ({ data }) => {
        this.offer = data
        this.isLoading = false
      },
      ({ error }) => {
        this.errorMsg = error?.message
        this.isLoading = false
      }
    )
  }

  createOffer(id: number) {
    this.isProcessing = true
    this._offerService.createRenta(id).subscribe(
      () => {
        this._snack.open('Покупка произведена')
        this.offerCompleted = true
        this.isProcessing = false
      },
      ({ error }) => {
        this._snack.open(error?.message)
        this.isProcessing = false
      }
    )
  }

  get session$() {
    return this._session.session$
  }
}
