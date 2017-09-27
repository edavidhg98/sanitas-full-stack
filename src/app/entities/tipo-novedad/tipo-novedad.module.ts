import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoNovedadSharedModule } from '../tipo-novedad/tipo-novedad-shared.module';


import { TipoNovedadComponent } from './tipo-novedad.component';
import { TipoNovedadUpSertComponent } from './tipo-novedad-upsert.component';
import { TipoNovedadDetailsComponent } from './tipo-novedad-details.component';
import { TipoNovedadService } from './tipo-novedad.service';

import { tipoNovedadRoutes } from './tipo-novedad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoNovedadRoutes),
    EntitiesSharedModule,
    TipoNovedadSharedModule    
  ],
  declarations: [
    TipoNovedadComponent,
    TipoNovedadUpSertComponent,
    TipoNovedadDetailsComponent
  ],
  providers: [ TipoNovedadService ]
})
export class TipoNovedadModule { }
