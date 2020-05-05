import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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

  constructor(public dialog: MatDialog,
              public elementRef: ElementRef
  ) { }

  @ViewChild('widgetsContent', {static: false}) widgetsContent: ElementRef;

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 1430;
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 1430;
  }


  ngOnInit() {
    this.openDialog();
  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '300px',
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




