import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { LoginSharedModule } from '../login/login-shared.module';

import { CiudadSharedModule } from '../ciudad/ciudad-shared.module';
import { LoginSucursalSharedModule } from '../login-sucursal/login-sucursal-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { LoginComponent } from './login.component';
import { LoginUpSertComponent } from './login-upsert.component';
import { LoginDetailsComponent } from './login-details.component';
import { LoginService } from './login.service';

import { loginRoutes } from './login.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    EntitiesSharedModule,
    LoginSharedModule,    
    CiudadSharedModule,    
    LoginSucursalSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    LoginComponent,
    LoginUpSertComponent,
    LoginDetailsComponent
  ],
  providers: [ LoginService ]
})
export class LoginModule { }
