import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html'
})
export class LoginDetailsComponent implements OnInit {

  login: Login;

    constructor(
      private loginService: LoginService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.loginService.getById(id).subscribe(login => this.login = login);
      });
    }
  }
