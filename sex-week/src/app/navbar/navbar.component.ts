import { Component, OnInit, Inject, HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    { provide: "Window", useValue: window }
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject("Window") private window: Window,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToEvents(): void {
    this.router.navigate(["/events"]);
  }

  goHome(): void {
    this.router.navigate(["/home"]);
  }

  goToStreams(): void {
    this.router.navigate(["/streams"]);
  }

  goToAbout(): void {
    let url = this.router.url;
    if (url.includes('home')) {
      this.window.document.getElementById('About').scrollIntoView();
    }
    else {
      this.router.navigate(['/home', 'about'])
    }
  }


  // ** This should have been in JQuery but I had an Issue with getting JQuery to work with Angular -Nelly//


  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {

      //After scrolling 100px from the top...
      console.log("Scroll top is", window.pageYOffset, "young nelly");
      console.log("Nav is ", elementNav);
      var elementNav = document.getElementById("Nav");
      if ((window.pageYOffset >= 60)) {
          console.log("scrolling")
          
          elementNav.classList.add("transparent");
      } else {
          console.log("Top")
          elementNav.classList.remove("transparent");
      }
  };

}
