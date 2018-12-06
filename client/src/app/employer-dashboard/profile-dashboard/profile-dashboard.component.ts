import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent implements OnInit {
  @Input() clicked: boolean;
  constructor() {}

  ngOnInit() {}
}
