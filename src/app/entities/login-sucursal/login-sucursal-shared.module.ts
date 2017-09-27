import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { LoginSucursalListComponent } from './login-sucursal-list.component';
import { LoginSucursalService } from './login-sucursal.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    LoginSucursalListComponent
  ],
  declarations: [
    LoginSucursalListComponent
  ],
  providers: [LoginSucursalService]
})
export class LoginSucursalSharedModule { }
