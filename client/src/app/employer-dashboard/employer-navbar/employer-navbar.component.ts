import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  searchCandidates: FormGroup = this.fb.group({
    candidate: ''
  });
  constructor(private auth: AuthService, private fb: FormBuilder) {}
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
