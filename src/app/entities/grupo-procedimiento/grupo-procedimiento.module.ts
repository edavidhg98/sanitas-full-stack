import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { GrupoProcedimientoSharedModule } from '../grupo-procedimiento/grupo-procedimiento-shared.module';

import { SubGrupoProcedimientoSharedModule } from '../sub-grupo-procedimiento/sub-grupo-procedimiento-shared.module';

import { GrupoProcedimientoComponent } from './grupo-procedimiento.component';
import { GrupoProcedimientoUpSertComponent } from './grupo-procedimiento-upsert.component';
import { GrupoProcedimientoDetailsComponent } from './grupo-procedimiento-details.component';
import { GrupoProcedimientoService } from './grupo-procedimiento.service';

import { grupoProcedimientoRoutes } from './grupo-procedimiento.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(grupoProcedimientoRoutes),
    EntitiesSharedModule,
    GrupoProcedimientoSharedModule,    
    SubGrupoProcedimientoSharedModule    
  ],
  declarations: [
    GrupoProcedimientoComponent,
    GrupoProcedimientoUpSertComponent,
    GrupoProcedimientoDetailsComponent
  ],
  providers: [ GrupoProcedimientoService ]
})
export class GrupoProcedimientoModule { }
