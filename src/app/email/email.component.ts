import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InviteCounterpartiesComponent } from '../invite-counterparties/invite-counterparties.component';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss',
})
export class EmailComponent implements OnInit {
  emails: any[] = []; // Initialize with data from backend
  mailId = 'henryjames@intellias.com';
  instumentData!: any;
  selectedParties!: any;
  futureDate!: any;
  constructor(
    public dialogRef: MatDialogRef<EmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private viewportScroller: ViewportScroller,
    private elementRef: ElementRef
  ) {
    this.instumentData = data.instrumentData.selectedInstrument;
    this.selectedParties = this.getUnique(data.selectedParties);
    this.getDate();
  }
  ngOnInit(): void {
    this.dialogRef.afterOpened().subscribe(() => {
      // Scroll to the top of the page when the dialog is opened
      // this.viewportScroller.scrollToPosition([0, 0]);
      // this.elementRef.nativeElement.scrollBottom = 0;
    });
  }
  getDate() {
    const currentDate = new Date();

    // Add 15 days to the current date
    this.futureDate = new Date(
      currentDate.getTime() + 15 * 24 * 60 * 60 * 1000
    );
  }
  getUnique(parties: any) {
    return Array.from(new Set(parties.map(JSON.stringify))).map(
      (item: any) => JSON.parse(item) as any
    );
  }
  sendInvites() {
    this._snackBar.open('Invited Successfully!', 'Close', {
      duration: 3000,
      verticalPosition: 'top', // Duration the snackbar should be displayed (in milliseconds)
    });
  }
}
