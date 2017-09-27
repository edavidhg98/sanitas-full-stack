import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoPlanSharedModule } from '../tipo-plan/tipo-plan-shared.module';

import { CamaPlanSharedModule } from '../cama-plan/cama-plan-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { TiposDocumentoEntidadSharedModule } from '../tipos-documento-entidad/tipos-documento-entidad-shared.module';

import { TipoPlanComponent } from './tipo-plan.component';
import { TipoPlanUpSertComponent } from './tipo-plan-upsert.component';
import { TipoPlanDetailsComponent } from './tipo-plan-details.component';
import { TipoPlanService } from './tipo-plan.service';

import { tipoPlanRoutes } from './tipo-plan.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoPlanRoutes),
    EntitiesSharedModule,
    TipoPlanSharedModule,    
    CamaPlanSharedModule,    
    EntidadSharedModule,    
    TiposDocumentoEntidadSharedModule    
  ],
  declarations: [
    TipoPlanComponent,
    TipoPlanUpSertComponent,
    TipoPlanDetailsComponent
  ],
  providers: [ TipoPlanService ]
})
export class TipoPlanModule { }
