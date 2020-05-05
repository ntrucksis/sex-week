import { Component, OnInit } from '@angular/core';
import { Event, EVENTS } from '../models';


@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  events = EVENTS;
  event: Event;
  count: number = 0;

  constructor() { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    let i = this.count;
    let event = this.events[i];
    this.event = event;
    var eventDate = new Date(event.date).getTime();

    var x = setInterval(function() {

      var now = new Date().getTime();

      let distance = eventDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML = 'Countdown until ' + event.title + "<br>" + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        this.count += 1;
        document.getElementById("demo").innerHTML = "EXPIRED";
      }

  }, 1000);

  }


}