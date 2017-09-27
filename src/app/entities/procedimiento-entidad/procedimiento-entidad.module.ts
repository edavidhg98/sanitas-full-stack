import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProcedimientoEntidadSharedModule } from '../procedimiento-entidad/procedimiento-entidad-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { ProcedimientoEntidadComponent } from './procedimiento-entidad.component';
import { ProcedimientoEntidadUpSertComponent } from './procedimiento-entidad-upsert.component';
import { ProcedimientoEntidadDetailsComponent } from './procedimiento-entidad-details.component';
import { ProcedimientoEntidadService } from './procedimiento-entidad.service';

import { procedimientoEntidadRoutes } from './procedimiento-entidad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(procedimientoEntidadRoutes),
    EntitiesSharedModule,
    ProcedimientoEntidadSharedModule,    
    EntidadSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    ProcedimientoEntidadComponent,
    ProcedimientoEntidadUpSertComponent,
    ProcedimientoEntidadDetailsComponent
  ],
  providers: [ ProcedimientoEntidadService ]
})
export class ProcedimientoEntidadModule { }
