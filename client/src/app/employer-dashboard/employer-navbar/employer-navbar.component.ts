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
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.User.subscribe((user: USER) => console.log(user));
  }
  handleProfile() {
    this.clickedProfile = !this.clickedProfile;
  }
  get User(): Observable<USER> {
    return this.auth.getUSER();
  }
}
