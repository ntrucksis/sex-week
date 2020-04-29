import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
) { }

  ngOnInit() {
  }


  goToEvents(): void {
    this.router.navigate(["/events"]);
  }

  goToStream(): void {
    this.router.navigate(['/streams']);
  }


}
