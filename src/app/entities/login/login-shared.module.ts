import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { LoginListComponent } from './login-list.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    LoginListComponent
  ],
  declarations: [
    LoginListComponent
  ],
  providers: [LoginService]
})
export class LoginSharedModule { }
