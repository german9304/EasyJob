import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { StyleService } from '../services/style-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  url: string;
  constructor(private router: Router, private sts: StyleService) {}

  ngOnInit() {
    this.url = this.sts.url;
    console.log(this.url);
  }
}
