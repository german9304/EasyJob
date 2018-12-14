import { Component, OnInit } from '@angular/core';
// import {Observable, of } from "rxjs";
import { USER } from '../../user';
import { AuthService } from '../../services/auth.service';
import {
  RouterModule,
  Routes,
  Router,
  ActivatedRoute,
  RouterEvent,
  NavigationEnd,
  ActivationEnd
} from '@angular/router';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  url = ' ';
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log('events', this.url);
    this.router.events
      .pipe(filter((e: RouterEvent) => e instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        // console.log(ev);
        this.url = ev.url;
      });
  }
}
