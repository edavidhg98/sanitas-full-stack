import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { MedicoGrupoProcedimientoSharedModule } from '../medico-grupo-procedimiento/medico-grupo-procedimiento-shared.module';

import { SubGrupoProcedimientoSharedModule } from '../sub-grupo-procedimiento/sub-grupo-procedimiento-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { MedicoGrupoProcedimientoComponent } from './medico-grupo-procedimiento.component';
import { MedicoGrupoProcedimientoUpSertComponent } from './medico-grupo-procedimiento-upsert.component';
import { MedicoGrupoProcedimientoDetailsComponent } from './medico-grupo-procedimiento-details.component';
import { MedicoGrupoProcedimientoService } from './medico-grupo-procedimiento.service';

import { medicoGrupoProcedimientoRoutes } from './medico-grupo-procedimiento.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(medicoGrupoProcedimientoRoutes),
    EntitiesSharedModule,
    MedicoGrupoProcedimientoSharedModule,    
    SubGrupoProcedimientoSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    MedicoGrupoProcedimientoComponent,
    MedicoGrupoProcedimientoUpSertComponent,
    MedicoGrupoProcedimientoDetailsComponent
  ],
  providers: [ MedicoGrupoProcedimientoService ]
})
export class MedicoGrupoProcedimientoModule { }
