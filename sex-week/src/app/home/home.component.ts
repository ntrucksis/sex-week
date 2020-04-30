import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject(Window) private window: Window
) { }

  ngOnInit() {
    this.checkAbout()
  }

  checkAbout(): void {
    let url = this.router.url;
    if (url.includes('about')) {
      this.window.document.getElementById('About').scrollIntoView();
    }
  }

  goToEvents(): void {
    this.router.navigate(["/events"]);
  }

  goToStream(): void {
    this.router.navigate(['/streams']);
  }


}
