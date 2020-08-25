import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'sr-basket-qr-popup',
  templateUrl: './renta-qr-popup.component.html',
  styleUrls: ['./renta-qr-popup.component.scss']
})
export class RentaQrPopupComponent implements OnInit {
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;

  code: string;

  hasDevices: boolean;
  hasPermission: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  ngOnInit(): void {
  }

  onScanSuccess(code: string) {
    this.code = code;
  }
}