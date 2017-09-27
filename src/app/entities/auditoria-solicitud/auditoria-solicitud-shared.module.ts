import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { AuditoriaSolicitudListComponent } from './auditoria-solicitud-list.component';
import { AuditoriaSolicitudService } from './auditoria-solicitud.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    AuditoriaSolicitudListComponent
  ],
  declarations: [
    AuditoriaSolicitudListComponent
  ],
  providers: [AuditoriaSolicitudService]
})
export class AuditoriaSolicitudSharedModule { }
