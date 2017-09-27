import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { AuditoriaEstadoAdmisionListComponent } from './auditoria-estado-admision-list.component';
import { AuditoriaEstadoAdmisionService } from './auditoria-estado-admision.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    AuditoriaEstadoAdmisionListComponent
  ],
  declarations: [
    AuditoriaEstadoAdmisionListComponent
  ],
  providers: [AuditoriaEstadoAdmisionService]
})
export class AuditoriaEstadoAdmisionSharedModule { }
