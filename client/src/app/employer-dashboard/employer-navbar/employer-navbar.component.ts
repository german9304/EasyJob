import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { USER } from '../../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employer-navbar',
  templateUrl: './employer-navbar.component.html',
  styleUrls: ['./employer-navbar.component.scss']
})
export class EmployerNavbarComponent implements OnInit {
  clickedProfile = false;
  email: string;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.User.subscribe((user: USER) => (this.email = user ? user.email : ''));
  }
  handleProfile() {
    this.clickedProfile = !this.clickedProfile;
  }
  get User(): Observable<USER> {
    return this.auth.getUSER();
  }
}
