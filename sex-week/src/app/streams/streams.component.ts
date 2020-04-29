import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../models';


@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  events = EVENTS;

  constructor() { }

  ngOnInit() {
  }

}
