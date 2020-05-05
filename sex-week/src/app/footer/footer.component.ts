import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nellyEmail: string = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Hello+world!&to=nellyok@u.northwesern.edu';
  miyaEmail: string = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Hello+world!&to=miya.jia38@gmail.com';
}
