import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CitaRetrasoSharedModule } from '../cita-retraso/cita-retraso-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { CitaRetrasoComponent } from './cita-retraso.component';
import { CitaRetrasoUpSertComponent } from './cita-retraso-upsert.component';
import { CitaRetrasoDetailsComponent } from './cita-retraso-details.component';
import { CitaRetrasoService } from './cita-retraso.service';

import { citaRetrasoRoutes } from './cita-retraso.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(citaRetrasoRoutes),
    EntitiesSharedModule,
    CitaRetrasoSharedModule,    
    EntidadSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    CitaRetrasoComponent,
    CitaRetrasoUpSertComponent,
    CitaRetrasoDetailsComponent
  ],
  providers: [ CitaRetrasoService ]
})
export class CitaRetrasoModule { }
