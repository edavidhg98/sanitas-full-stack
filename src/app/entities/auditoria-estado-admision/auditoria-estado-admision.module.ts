import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { AuditoriaEstadoAdmisionSharedModule } from '../auditoria-estado-admision/auditoria-estado-admision-shared.module';


import { AuditoriaEstadoAdmisionComponent } from './auditoria-estado-admision.component';
import { AuditoriaEstadoAdmisionUpSertComponent } from './auditoria-estado-admision-upsert.component';
import { AuditoriaEstadoAdmisionDetailsComponent } from './auditoria-estado-admision-details.component';
import { AuditoriaEstadoAdmisionService } from './auditoria-estado-admision.service';

import { auditoriaEstadoAdmisionRoutes } from './auditoria-estado-admision.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(auditoriaEstadoAdmisionRoutes),
    EntitiesSharedModule,
    AuditoriaEstadoAdmisionSharedModule    
  ],
  declarations: [
    AuditoriaEstadoAdmisionComponent,
    AuditoriaEstadoAdmisionUpSertComponent,
    AuditoriaEstadoAdmisionDetailsComponent
  ],
  providers: [ AuditoriaEstadoAdmisionService ]
})
export class AuditoriaEstadoAdmisionModule { }
