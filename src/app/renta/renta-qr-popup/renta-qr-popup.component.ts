import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

import QrScanner from 'qr-scanner'

QrScanner.WORKER_PATH = 'assets/qr-scanner-worker.min.js'

@Component({
  selector: 'sr-basket-qr-popup',
  templateUrl: './renta-qr-popup.component.html',
  styleUrls: ['./renta-qr-popup.component.scss']
})
export class RentaQrPopupComponent implements OnDestroy, AfterViewInit {
  qrReader = null
  code: string
  hasDevices: boolean
  errorText: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  @ViewChild('qr') videoRef: ElementRef

  ngOnDestroy(): void {
    this.qrReader.destroy()
    this.qrReader = null
  }

  onScanSuccess(code: string) {
    if (code) {
      this.code = code
    }
  }

  ngAfterViewInit(): void {
    this._setupQrReader()
  }

  private async _setupQrReader() {
    this.qrReader = new QrScanner(this.videoRef.nativeElement, this.onScanSuccess, () => {

    })
    this.hasDevices = await QrScanner.hasCamera()
    this.qrReader.start().catch(err => {
      this.errorText = err
      this.hasDevices = false
    })
  }
}
