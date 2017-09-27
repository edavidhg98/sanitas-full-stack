import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TrazabilidadAdmisionSharedModule } from '../trazabilidad-admision/trazabilidad-admision-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { TipoAdmisionSharedModule } from '../tipo-admision/tipo-admision-shared.module';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaSharedModule } from '../trazabilidad-admision-lista-espera-historia-clinica/trazabilidad-admision-lista-espera-historia-clinica-shared.module';
import { ConsultorioSharedModule } from '../consultorio/consultorio-shared.module';
import { MotivoSharedModule } from '../motivo/motivo-shared.module';
import { TrazabilidadAdmisionCargosSharedModule } from '../trazabilidad-admision-cargos/trazabilidad-admision-cargos-shared.module';

import { TrazabilidadAdmisionComponent } from './trazabilidad-admision.component';
import { TrazabilidadAdmisionUpSertComponent } from './trazabilidad-admision-upsert.component';
import { TrazabilidadAdmisionDetailsComponent } from './trazabilidad-admision-details.component';
import { TrazabilidadAdmisionService } from './trazabilidad-admision.service';

import { trazabilidadAdmisionRoutes } from './trazabilidad-admision.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(trazabilidadAdmisionRoutes),
    EntitiesSharedModule,
    TrazabilidadAdmisionSharedModule,    
    SucursalSharedModule,    
    TipoAdmisionSharedModule,    
    TrazabilidadAdmisionListaEsperaHistoriaClinicaSharedModule,    
    ConsultorioSharedModule,    
    MotivoSharedModule,    
    TrazabilidadAdmisionCargosSharedModule    
  ],
  declarations: [
    TrazabilidadAdmisionComponent,
    TrazabilidadAdmisionUpSertComponent,
    TrazabilidadAdmisionDetailsComponent
  ],
  providers: [ TrazabilidadAdmisionService ]
})
export class TrazabilidadAdmisionModule { }
