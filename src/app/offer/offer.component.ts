import { Component, OnInit } from '@angular/core';
import { OfferService } from './offer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'sr-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  offerId: string;
  offer: any;

  isLoading = true;

  constructor(private _offerService: OfferService, private _route: ActivatedRoute, private _session: SessionService) {
  }

  ngOnInit(): void {
    this.offerId = this._route.snapshot.params?.id;
    this.session$.subscribe(session => {
      if (!session) {
        return;
      }
      this.getOffer(this.offerId, session.currentCharacterId.toString());
    });
  }

  getOffer(id: string, charId: string) {
    this._offerService.getRenta(id, charId).subscribe(offer => this.offer = offer);
  }

  get session$() {
    return this._session.session$;
  }
}
