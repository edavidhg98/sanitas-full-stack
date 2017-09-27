import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { HomologacionEntidadSharedModule } from '../homologacion-entidad/homologacion-entidad-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { HomologacionEntidadComponent } from './homologacion-entidad.component';
import { HomologacionEntidadUpSertComponent } from './homologacion-entidad-upsert.component';
import { HomologacionEntidadDetailsComponent } from './homologacion-entidad-details.component';
import { HomologacionEntidadService } from './homologacion-entidad.service';

import { homologacionEntidadRoutes } from './homologacion-entidad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homologacionEntidadRoutes),
    EntitiesSharedModule,
    HomologacionEntidadSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    HomologacionEntidadComponent,
    HomologacionEntidadUpSertComponent,
    HomologacionEntidadDetailsComponent
  ],
  providers: [ HomologacionEntidadService ]
})
export class HomologacionEntidadModule { }
