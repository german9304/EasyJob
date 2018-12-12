import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { USER } from './user';
import { filter } from 'rxjs/operators';
import {
  RouterModule,
  Routes,
  Router,
  ActivatedRoute,
  NavigationEnd,
  Event,
  RouterEvent
} from '@angular/router';
import { StyleService } from './services/style-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private sts: StyleService
  ) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((ev: RouterEvent) => ev instanceof NavigationEnd))
      .subscribe((ev: RouterEvent) => {
        this.sts.Url = ev.url;
      });
  }
}
