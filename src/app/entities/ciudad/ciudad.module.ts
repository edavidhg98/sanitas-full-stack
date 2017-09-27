import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CiudadSharedModule } from '../ciudad/ciudad-shared.module';

import { LocalidadSharedModule } from '../localidad/localidad-shared.module';
import { PrestadorSharedModule } from '../prestador/prestador-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { LoginSharedModule } from '../login/login-shared.module';

import { CiudadComponent } from './ciudad.component';
import { CiudadUpSertComponent } from './ciudad-upsert.component';
import { CiudadDetailsComponent } from './ciudad-details.component';
import { CiudadService } from './ciudad.service';

import { ciudadRoutes } from './ciudad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ciudadRoutes),
    EntitiesSharedModule,
    CiudadSharedModule,    
    LocalidadSharedModule,    
    PrestadorSharedModule,    
    SucursalSharedModule,    
    EntidadSharedModule,    
    LoginSharedModule    
  ],
  declarations: [
    CiudadComponent,
    CiudadUpSertComponent,
    CiudadDetailsComponent
  ],
  providers: [ CiudadService ]
})
export class CiudadModule { }
