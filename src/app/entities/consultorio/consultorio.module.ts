import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ConsultorioSharedModule } from '../consultorio/consultorio-shared.module';

import { TrazabilidadAdmisionSharedModule } from '../trazabilidad-admision/trazabilidad-admision-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { TriageSharedModule } from '../triage/triage-shared.module';

import { ConsultorioComponent } from './consultorio.component';
import { ConsultorioUpSertComponent } from './consultorio-upsert.component';
import { ConsultorioDetailsComponent } from './consultorio-details.component';
import { ConsultorioService } from './consultorio.service';

import { consultorioRoutes } from './consultorio.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(consultorioRoutes),
    EntitiesSharedModule,
    ConsultorioSharedModule,    
    TrazabilidadAdmisionSharedModule,    
    SucursalSharedModule,    
    TriageSharedModule    
  ],
  declarations: [
    ConsultorioComponent,
    ConsultorioUpSertComponent,
    ConsultorioDetailsComponent
  ],
  providers: [ ConsultorioService ]
})
export class ConsultorioModule { }
