import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sr-transactions-new',
  templateUrl: './transactions-new.component.html',
  styleUrls: ['./transactions-new.component.scss']
})
export class TransactionsNewComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      amount: [0, Validators.required],
      comment: [''],
      type: false,
    });
  }

  get transferTypeCtrl() {
    return this.form.get('type');
  }
}
