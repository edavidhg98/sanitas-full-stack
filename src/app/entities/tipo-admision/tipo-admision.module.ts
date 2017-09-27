import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoAdmisionSharedModule } from '../tipo-admision/tipo-admision-shared.module';

import { ExcepcionRegargoSharedModule } from '../excepcion-regargo/excepcion-regargo-shared.module';
import { NivelCargoSharedModule } from '../nivel-cargo/nivel-cargo-shared.module';
import { ProcedimientoConvenioCapitadoSharedModule } from '../procedimiento-convenio-capitado/procedimiento-convenio-capitado-shared.module';
import { TrazabilidadAdmisionSharedModule } from '../trazabilidad-admision/trazabilidad-admision-shared.module';
import { SubconceptoSharedModule } from '../subconcepto/subconcepto-shared.module';

import { TipoAdmisionComponent } from './tipo-admision.component';
import { TipoAdmisionUpSertComponent } from './tipo-admision-upsert.component';
import { TipoAdmisionDetailsComponent } from './tipo-admision-details.component';
import { TipoAdmisionService } from './tipo-admision.service';

import { tipoAdmisionRoutes } from './tipo-admision.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoAdmisionRoutes),
    EntitiesSharedModule,
    TipoAdmisionSharedModule,    
    ExcepcionRegargoSharedModule,    
    NivelCargoSharedModule,    
    ProcedimientoConvenioCapitadoSharedModule,    
    TrazabilidadAdmisionSharedModule,    
    SubconceptoSharedModule    
  ],
  declarations: [
    TipoAdmisionComponent,
    TipoAdmisionUpSertComponent,
    TipoAdmisionDetailsComponent
  ],
  providers: [ TipoAdmisionService ]
})
export class TipoAdmisionModule { }
