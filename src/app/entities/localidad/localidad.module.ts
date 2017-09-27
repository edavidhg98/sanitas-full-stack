import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { LocalidadSharedModule } from '../localidad/localidad-shared.module';

import { CiudadSharedModule } from '../ciudad/ciudad-shared.module';

import { LocalidadComponent } from './localidad.component';
import { LocalidadUpSertComponent } from './localidad-upsert.component';
import { LocalidadDetailsComponent } from './localidad-details.component';
import { LocalidadService } from './localidad.service';

import { localidadRoutes } from './localidad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(localidadRoutes),
    EntitiesSharedModule,
    LocalidadSharedModule,    
    CiudadSharedModule    
  ],
  declarations: [
    LocalidadComponent,
    LocalidadUpSertComponent,
    LocalidadDetailsComponent
  ],
  providers: [ LocalidadService ]
})
export class LocalidadModule { }
