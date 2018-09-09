import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-view",
  template: `
      <div class="container">
          <form id="login-form" class="login">
            <div class="form form-group">
              <label for="name">username:</label>
              <input type="text" id="name" placeholder="Name">
            </div>
            <div class="form form-group">
              <label for="password" id="password">Password:</label>
              <input type="password" placeholder="Password" id="password">
            </div>
          <div class="form form-btn">
            <button type="submit"> sign in </button>
          </div>
          </form>
      </div>
  `,
  styleUrls: ["./login-view.component.css"]
})
export class LoginViewComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
