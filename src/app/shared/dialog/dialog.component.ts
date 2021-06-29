import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'

export interface DialogData {
  title?: string,
  description?: string
  succesText?: string
  confirmBtnText?: string
  confirmMethod: () => Observable<any>
}

@Component({
  selector: 'sr-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  pending = false

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, public alert: MatSnackBar) {
  }

  onAccept() {
    this.dialogRef.disableClose = true
    this.pending = true
    this.data.confirmMethod().subscribe((el) => {
        this.alert.open(this.data.succesText || 'Успешно!', '', {duration: 3000})
        this.dialogRef.close(el)
      },
      error => {
        this.alert.open(error.message)
        this.pending = false
        this.dialogRef.disableClose = false
      })
  }

  onDecline() {
    this.dialogRef.close()
  }
}
