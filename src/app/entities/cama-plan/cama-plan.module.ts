import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CamaPlanSharedModule } from '../cama-plan/cama-plan-shared.module';

import { CamaSharedModule } from '../cama/cama-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { TipoPlanSharedModule } from '../tipo-plan/tipo-plan-shared.module';

import { CamaPlanComponent } from './cama-plan.component';
import { CamaPlanUpSertComponent } from './cama-plan-upsert.component';
import { CamaPlanDetailsComponent } from './cama-plan-details.component';
import { CamaPlanService } from './cama-plan.service';

import { camaPlanRoutes } from './cama-plan.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(camaPlanRoutes),
    EntitiesSharedModule,
    CamaPlanSharedModule,    
    CamaSharedModule,    
    EntidadSharedModule,    
    TipoPlanSharedModule    
  ],
  declarations: [
    CamaPlanComponent,
    CamaPlanUpSertComponent,
    CamaPlanDetailsComponent
  ],
  providers: [ CamaPlanService ]
})
export class CamaPlanModule { }
