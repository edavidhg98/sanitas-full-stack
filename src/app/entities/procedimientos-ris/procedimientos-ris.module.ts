import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProcedimientosRisSharedModule } from '../procedimientos-ris/procedimientos-ris-shared.module';

import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { ProcedimientosRisComponent } from './procedimientos-ris.component';
import { ProcedimientosRisUpSertComponent } from './procedimientos-ris-upsert.component';
import { ProcedimientosRisDetailsComponent } from './procedimientos-ris-details.component';
import { ProcedimientosRisService } from './procedimientos-ris.service';

import { procedimientosRisRoutes } from './procedimientos-ris.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(procedimientosRisRoutes),
    EntitiesSharedModule,
    ProcedimientosRisSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    ProcedimientosRisComponent,
    ProcedimientosRisUpSertComponent,
    ProcedimientosRisDetailsComponent
  ],
  providers: [ ProcedimientosRisService ]
})
export class ProcedimientosRisModule { }
