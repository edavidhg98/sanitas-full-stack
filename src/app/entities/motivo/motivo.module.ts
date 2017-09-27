import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { MotivoSharedModule } from '../motivo/motivo-shared.module';

import { AdmisionObservacionesSharedModule } from '../admision-observaciones/admision-observaciones-shared.module';
import { CensoTrasladoSharedModule } from '../censo-traslado/censo-traslado-shared.module';
import { DetalleCargosPendientesSharedModule } from '../detalle-cargos-pendientes/detalle-cargos-pendientes-shared.module';
import { TrazabilidadAdmisionSharedModule } from '../trazabilidad-admision/trazabilidad-admision-shared.module';
import { TriageSharedModule } from '../triage/triage-shared.module';
import { TipoMotivoSharedModule } from '../tipo-motivo/tipo-motivo-shared.module';
import { SubconceptoSharedModule } from '../subconcepto/subconcepto-shared.module';
import { PypProcedimientoProgramaSharedModule } from '../pyp-procedimiento-programa/pyp-procedimiento-programa-shared.module';

import { MotivoComponent } from './motivo.component';
import { MotivoUpSertComponent } from './motivo-upsert.component';
import { MotivoDetailsComponent } from './motivo-details.component';
import { MotivoService } from './motivo.service';

import { motivoRoutes } from './motivo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(motivoRoutes),
    EntitiesSharedModule,
    MotivoSharedModule,    
    AdmisionObservacionesSharedModule,    
    CensoTrasladoSharedModule,    
    DetalleCargosPendientesSharedModule,    
    TrazabilidadAdmisionSharedModule,    
    TriageSharedModule,    
    TipoMotivoSharedModule,    
    SubconceptoSharedModule,    
    PypProcedimientoProgramaSharedModule    
  ],
  declarations: [
    MotivoComponent,
    MotivoUpSertComponent,
    MotivoDetailsComponent
  ],
  providers: [ MotivoService ]
})
export class MotivoModule { }
