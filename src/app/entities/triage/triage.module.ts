import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TriageSharedModule } from '../triage/triage-shared.module';

import { ConsultorioSharedModule } from '../consultorio/consultorio-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { MotivoSharedModule } from '../motivo/motivo-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { TriageComponent } from './triage.component';
import { TriageUpSertComponent } from './triage-upsert.component';
import { TriageDetailsComponent } from './triage-details.component';
import { TriageService } from './triage.service';

import { triageRoutes } from './triage.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(triageRoutes),
    EntitiesSharedModule,
    TriageSharedModule,    
    ConsultorioSharedModule,    
    EntidadSharedModule,    
    MotivoSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    TriageComponent,
    TriageUpSertComponent,
    TriageDetailsComponent
  ],
  providers: [ TriageService ]
})
export class TriageModule { }
