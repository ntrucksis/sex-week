import { Component, OnInit, Inject } from '@angular/core';
import { Event, EVENTS, popupData } from '../models';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  text: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  popupTxt = popupData;

  events = EVENTS;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: {text: this.popupTxt}
    })
  }

}

@Component({
  selector: 'popup',
  templateUrl: 'popup.component.html'
})

export class PopupComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onOkClick(): void {
      this.dialogRef.close();
    }
}
