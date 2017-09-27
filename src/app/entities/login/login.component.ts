import { Component, OnInit, Inject } from '@angular/core';

import { LoginService } from './login.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  template: `
              <div class="container-fluid">
                <app-login-list [logins]="logins"></app-login-list>
              </div>
            `
})
export class LoginComponent implements OnInit {

  logins: Login[] = [];

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.getAll().subscribe(logins => this.logins = logins);
  }
}
