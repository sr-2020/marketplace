import { Component, OnInit } from '@angular/core';
import { OfferService } from './offer.service'

@Component({
  selector: 'sr-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  constructor(private _offerService: OfferService) { }

  ngOnInit(): void {
  }

  sendRequest() {
    this._offerService.getRenta(8589934595).subscribe(el => console.log(el))
  }
}
