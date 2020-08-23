import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { TransferModel } from '../models/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private router: Router, private _session: SessionService, private _httpClient: HttpClient) {
  }

  getTransferList(): Observable<ResponseModel<TransferModel[]>> {
    return this._httpClient.post<ResponseModel<TransferModel[]>>(
      `${ environment.api }shop/getTransfers`,
      { shop: this._session.selectedShop.value.id });
  }

  createTransaction(transaction) {

  }

}
