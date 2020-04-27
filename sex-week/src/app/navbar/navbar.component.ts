import { Component, OnInit, Inject } from '@angular/core';
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

}
