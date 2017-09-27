import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SubGrupoProcedimientoSharedModule } from '../sub-grupo-procedimiento/sub-grupo-procedimiento-shared.module';

import { GrupoProcedimientoSharedModule } from '../grupo-procedimiento/grupo-procedimiento-shared.module';
import { MedicoGrupoProcedimientoSharedModule } from '../medico-grupo-procedimiento/medico-grupo-procedimiento-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { SubGrupoProcedimientoComponent } from './sub-grupo-procedimiento.component';
import { SubGrupoProcedimientoUpSertComponent } from './sub-grupo-procedimiento-upsert.component';
import { SubGrupoProcedimientoDetailsComponent } from './sub-grupo-procedimiento-details.component';
import { SubGrupoProcedimientoService } from './sub-grupo-procedimiento.service';

import { subGrupoProcedimientoRoutes } from './sub-grupo-procedimiento.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(subGrupoProcedimientoRoutes),
    EntitiesSharedModule,
    SubGrupoProcedimientoSharedModule,    
    GrupoProcedimientoSharedModule,    
    MedicoGrupoProcedimientoSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    SubGrupoProcedimientoComponent,
    SubGrupoProcedimientoUpSertComponent,
    SubGrupoProcedimientoDetailsComponent
  ],
  providers: [ SubGrupoProcedimientoService ]
})
export class SubGrupoProcedimientoModule { }
