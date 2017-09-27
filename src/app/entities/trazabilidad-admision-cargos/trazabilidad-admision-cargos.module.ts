import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TrazabilidadAdmisionCargosSharedModule } from '../trazabilidad-admision-cargos/trazabilidad-admision-cargos-shared.module';

import { TrazabilidadAdmisionSharedModule } from '../trazabilidad-admision/trazabilidad-admision-shared.module';

import { TrazabilidadAdmisionCargosComponent } from './trazabilidad-admision-cargos.component';
import { TrazabilidadAdmisionCargosUpSertComponent } from './trazabilidad-admision-cargos-upsert.component';
import { TrazabilidadAdmisionCargosDetailsComponent } from './trazabilidad-admision-cargos-details.component';
import { TrazabilidadAdmisionCargosService } from './trazabilidad-admision-cargos.service';

import { trazabilidadAdmisionCargosRoutes } from './trazabilidad-admision-cargos.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(trazabilidadAdmisionCargosRoutes),
    EntitiesSharedModule,
    TrazabilidadAdmisionCargosSharedModule,    
    TrazabilidadAdmisionSharedModule    
  ],
  declarations: [
    TrazabilidadAdmisionCargosComponent,
    TrazabilidadAdmisionCargosUpSertComponent,
    TrazabilidadAdmisionCargosDetailsComponent
  ],
  providers: [ TrazabilidadAdmisionCargosService ]
})
export class TrazabilidadAdmisionCargosModule { }
