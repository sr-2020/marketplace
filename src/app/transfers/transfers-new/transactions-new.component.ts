import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'sr-transactions-new',
  templateUrl: './transactions-new.component.html',
  styleUrls: ['./transactions-new.component.scss']
})
export class TransactionsNewComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: TransferService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      target: ['', Validators.required],
      sum: [0, [Validators.required, Validators.pattern(/[+-]?\d+/)]],
      comment: [''],
      type: false,
    });
  }

  performTransaction() {
    this.service.createTransaction(
      {
        id: Math.random().toString(),
        target: this.form.value.target,
        timestamp: new Date().getTime(),
        sum: this.form.value.sum,
        comment: this.form.value.comment,
      }
    );
  }


  get transferTypeCtrl() {
    return this.form.get('type');
  }


}
