import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { AuditoriaContratoSharedModule } from '../auditoria-contrato/auditoria-contrato-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { AuditoriaContratoComponent } from './auditoria-contrato.component';
import { AuditoriaContratoUpSertComponent } from './auditoria-contrato-upsert.component';
import { AuditoriaContratoDetailsComponent } from './auditoria-contrato-details.component';
import { AuditoriaContratoService } from './auditoria-contrato.service';

import { auditoriaContratoRoutes } from './auditoria-contrato.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(auditoriaContratoRoutes),
    EntitiesSharedModule,
    AuditoriaContratoSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    AuditoriaContratoComponent,
    AuditoriaContratoUpSertComponent,
    AuditoriaContratoDetailsComponent
  ],
  providers: [ AuditoriaContratoService ]
})
export class AuditoriaContratoModule { }
