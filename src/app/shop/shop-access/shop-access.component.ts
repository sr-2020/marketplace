import { Component, OnInit } from '@angular/core'
import { HttpAdapterService } from '@shared/services/http-adapter.service'

@Component({
  selector: 'sr-shop-access',
  templateUrl: './shop-access.component.html',
  styleUrls: ['./shop-access.component.scss']
})
export class ShopAccessComponent implements OnInit {
  users = []
  constructor(private _http: HttpAdapterService) { }

  ngOnInit(): void {
    this._http.getReq(['users']).subscribe(el => {
      console.log(el)
    })
  }

}
