import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent implements OnInit {
  @Input() clicked: boolean;
  @Input() email: string;
  constructor() {}
  ngOnInit() {}
}
