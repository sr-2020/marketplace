import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Component({
  selector: 'sr-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
  req: any

  constructor(private httpService: HttpClient) {
  }

  sendTestReq() {
    this.httpService.get('https://gateway.evarun.ru/api/v1/billing/api/test/testid', { withCredentials: true })
      .subscribe(
        el => console.log(el),
        error => console.log(error))
  }

  sendPostReq() {
    return this.httpService.post(`${ environment.api }shop/getproducts`,
      { shop: 3 },
      { withCredentials: true }).subscribe(el => console.log(el), err => console.log(err));
  }

  ngOnInit(): void {
  }

}
