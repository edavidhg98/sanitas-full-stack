import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { AuditoriaSharedModule } from '../auditoria/auditoria-shared.module';


import { AuditoriaComponent } from './auditoria.component';
import { AuditoriaUpSertComponent } from './auditoria-upsert.component';
import { AuditoriaDetailsComponent } from './auditoria-details.component';
import { AuditoriaService } from './auditoria.service';

import { auditoriaRoutes } from './auditoria.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(auditoriaRoutes),
    EntitiesSharedModule,
    AuditoriaSharedModule    
  ],
  declarations: [
    AuditoriaComponent,
    AuditoriaUpSertComponent,
    AuditoriaDetailsComponent
  ],
  providers: [ AuditoriaService ]
})
export class AuditoriaModule { }
