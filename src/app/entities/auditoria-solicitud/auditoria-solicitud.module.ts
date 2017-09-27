import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { AuditoriaSolicitudSharedModule } from '../auditoria-solicitud/auditoria-solicitud-shared.module';

import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { AuditoriaSolicitudComponent } from './auditoria-solicitud.component';
import { AuditoriaSolicitudUpSertComponent } from './auditoria-solicitud-upsert.component';
import { AuditoriaSolicitudDetailsComponent } from './auditoria-solicitud-details.component';
import { AuditoriaSolicitudService } from './auditoria-solicitud.service';

import { auditoriaSolicitudRoutes } from './auditoria-solicitud.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(auditoriaSolicitudRoutes),
    EntitiesSharedModule,
    AuditoriaSolicitudSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    AuditoriaSolicitudComponent,
    AuditoriaSolicitudUpSertComponent,
    AuditoriaSolicitudDetailsComponent
  ],
  providers: [ AuditoriaSolicitudService ]
})
export class AuditoriaSolicitudModule { }
