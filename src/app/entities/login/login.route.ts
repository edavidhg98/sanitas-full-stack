import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginUpSertComponent } from './login-upsert.component';
import { LoginDetailsComponent } from './login-details.component';

export const loginRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent },
      { path: 'create', component: LoginUpSertComponent },
      { path: ':id', component: LoginDetailsComponent },
      { path: ':id/update', component: LoginUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/login/';
