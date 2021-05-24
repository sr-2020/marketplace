import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TransferService } from '../transfer.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'

@Component({
  selector: 'sr-transactions-new',
  templateUrl: './transactions-new.component.html',
  styleUrls: ['./transactions-new.component.scss'],
})
export class TransactionsNewComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TransferService,
    private _snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      target: ['', Validators.required],
      amount: [0, [Validators.required, Validators.pattern(/[+-]?\d+/)]],
      comment: [''],
      type: false,
    })
  }

  performTransaction() {
    this.service
      .createTransaction(
        {
          target: this.form.value.target,
          amount: this.form.value.amount,
          comment: this.form.value.comment,
        },
        this.form.value.type
      )
      .subscribe(
        () => {
          this._snack.open('Перевод выполнен успешно')
          this.router.navigate(['/', 'shop', 'transfers'])
        },
        (err) => this._snack.open(err.message)
      )
  }

  get transferTypeCtrl() {
    return this.form.get('type')
  }
}
