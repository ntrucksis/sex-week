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
    this.document.location.href = "https://facebook.com/northwesternsexweek/";
  }

  goToInstagram(): void {
    this.document.location.href = "https://instagram.com/sexweeknu?igshid=1crtwn4dql9ip";
  }

}
