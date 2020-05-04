import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spotify-social',
  templateUrl: './spotify-social.component.html',
  styleUrls: ['./spotify-social.component.css']
})
export class SpotifySocialComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToFacebook(): void {
    //this.document.location.href = "https://facebook.com/northwesternsexweek/";
    window.open("https://facebook.com/northwesternsexweek/", "_blank");
  }

  goToInstagram(): void {
    window.open("https://instagram.com/sexweeknu?igshid=1crtwn4dql9ip", "_blank");
  }

  goToYoutube(): void {
    window.open("https://www.youtube.com/channel/UCWw0_BhQqCeBCzsAgnpDNRQ", "_blank");
  }

}
