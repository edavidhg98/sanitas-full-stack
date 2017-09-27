import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { AdmisionObservacionesSharedModule } from '../admision-observaciones/admision-observaciones-shared.module';

import { CamaSharedModule } from '../cama/cama-shared.module';
import { MotivoSharedModule } from '../motivo/motivo-shared.module';

import { AdmisionObservacionesComponent } from './admision-observaciones.component';
import { AdmisionObservacionesUpSertComponent } from './admision-observaciones-upsert.component';
import { AdmisionObservacionesDetailsComponent } from './admision-observaciones-details.component';
import { AdmisionObservacionesService } from './admision-observaciones.service';

import { admisionObservacionesRoutes } from './admision-observaciones.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(admisionObservacionesRoutes),
    EntitiesSharedModule,
    AdmisionObservacionesSharedModule,    
    CamaSharedModule,    
    MotivoSharedModule    
  ],
  declarations: [
    AdmisionObservacionesComponent,
    AdmisionObservacionesUpSertComponent,
    AdmisionObservacionesDetailsComponent
  ],
  providers: [ AdmisionObservacionesService ]
})
export class AdmisionObservacionesModule { }
