import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
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
