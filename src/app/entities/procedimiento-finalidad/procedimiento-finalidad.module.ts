import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProcedimientoFinalidadSharedModule } from '../procedimiento-finalidad/procedimiento-finalidad-shared.module';

import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { ProcedimientoFinalidadComponent } from './procedimiento-finalidad.component';
import { ProcedimientoFinalidadUpSertComponent } from './procedimiento-finalidad-upsert.component';
import { ProcedimientoFinalidadDetailsComponent } from './procedimiento-finalidad-details.component';
import { ProcedimientoFinalidadService } from './procedimiento-finalidad.service';

import { procedimientoFinalidadRoutes } from './procedimiento-finalidad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(procedimientoFinalidadRoutes),
    EntitiesSharedModule,
    ProcedimientoFinalidadSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    ProcedimientoFinalidadComponent,
    ProcedimientoFinalidadUpSertComponent,
    ProcedimientoFinalidadDetailsComponent
  ],
  providers: [ ProcedimientoFinalidadService ]
})
export class ProcedimientoFinalidadModule { }
