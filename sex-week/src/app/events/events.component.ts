import { Component, OnInit } from '@angular/core';
import { Event, EVENTS } from '../models';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = EVENTS;

  constructor() { }

  ngOnInit() {
  }

}
