import { Component, HostBinding, OnInit } from '@angular/core'

@Component({
  selector: 'sr-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @HostBinding('container-fluid') test = true

  constructor() {
  }

  ngOnInit(): void {
  }
}
