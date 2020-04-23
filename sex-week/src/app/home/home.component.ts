import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  goToFacebook(): void {
    this.document.location.href = "https://facebook.com/northwesternsexweek/";
  }

  goToInstagram(): void {
    this.document.location.href = "https://instagram.com/sexweeknu?igshid=1crtwn4dql9ip";
  }


}
