import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'sr-godds-qr-popup',
  templateUrl: './goods-qr-popup.component.html',
  styleUrls: ['./goods-qr-popup.component.scss']
})
export class GoodsQrPopupComponent implements OnInit {
  imgUrl: SafeUrl;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private _httpClient: HttpClient, private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this._httpClient.get(this.data, { responseType: 'blob' })
      .subscribe(res => this.createDataUrl(res));
  }

  createDataUrl(res: Blob) {
    console.log(this.data);

    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      const base64data = reader.result;
      this.imgUrl = this._sanitizer.bypassSecurityTrustUrl(base64data as string);
    };
  }
}
