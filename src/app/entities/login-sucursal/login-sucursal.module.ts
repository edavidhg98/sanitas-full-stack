import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { LoginSucursalSharedModule } from '../login-sucursal/login-sucursal-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { LoginSharedModule } from '../login/login-shared.module';

import { LoginSucursalComponent } from './login-sucursal.component';
import { LoginSucursalUpSertComponent } from './login-sucursal-upsert.component';
import { LoginSucursalDetailsComponent } from './login-sucursal-details.component';
import { LoginSucursalService } from './login-sucursal.service';

import { loginSucursalRoutes } from './login-sucursal.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginSucursalRoutes),
    EntitiesSharedModule,
    LoginSucursalSharedModule,    
    SucursalSharedModule,    
    LoginSharedModule    
  ],
  declarations: [
    LoginSucursalComponent,
    LoginSucursalUpSertComponent,
    LoginSucursalDetailsComponent
  ],
  providers: [ LoginSucursalService ]
})
export class LoginSucursalModule { }
