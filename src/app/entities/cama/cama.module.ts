import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CamaSharedModule } from '../cama/cama-shared.module';

import { AdmisionObservacionesSharedModule } from '../admision-observaciones/admision-observaciones-shared.module';
import { FotoEstadoCamaSharedModule } from '../foto-estado-cama/foto-estado-cama-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { CensoHistoricoSharedModule } from '../censo-historico/censo-historico-shared.module';
import { CensoTrasladoSharedModule } from '../censo-traslado/censo-traslado-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';
import { SeccionSharedModule } from '../seccion/seccion-shared.module';
import { TipoCamaSharedModule } from '../tipo-cama/tipo-cama-shared.module';
import { CamaPlanSharedModule } from '../cama-plan/cama-plan-shared.module';

import { CamaComponent } from './cama.component';
import { CamaUpSertComponent } from './cama-upsert.component';
import { CamaDetailsComponent } from './cama-details.component';
import { CamaService } from './cama.service';

import { camaRoutes } from './cama.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(camaRoutes),
    EntitiesSharedModule,
    CamaSharedModule,    
    AdmisionObservacionesSharedModule,    
    FotoEstadoCamaSharedModule,    
    SucursalSharedModule,    
    CensoHistoricoSharedModule,    
    CensoTrasladoSharedModule,    
    ProcedimientoSharedModule,    
    SeccionSharedModule,    
    TipoCamaSharedModule,    
    CamaPlanSharedModule    
  ],
  declarations: [
    CamaComponent,
    CamaUpSertComponent,
    CamaDetailsComponent
  ],
  providers: [ CamaService ]
})
export class CamaModule { }
