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
    this.getEvent();
  }

  getEvent() {
    const i = 0;
    let event = this.events[i]
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
        document.getElementById("demo").innerHTML = "EXPIRED";
      }

  }, 1000);

  }


}
