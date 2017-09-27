import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProcedimientoConvenioCapitadoSharedModule } from '../procedimiento-convenio-capitado/procedimiento-convenio-capitado-shared.module';

import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';
import { TipoAdmisionSharedModule } from '../tipo-admision/tipo-admision-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { ProcedimientoConvenioCapitadoComponent } from './procedimiento-convenio-capitado.component';
import { ProcedimientoConvenioCapitadoUpSertComponent } from './procedimiento-convenio-capitado-upsert.component';
import { ProcedimientoConvenioCapitadoDetailsComponent } from './procedimiento-convenio-capitado-details.component';
import { ProcedimientoConvenioCapitadoService } from './procedimiento-convenio-capitado.service';

import { procedimientoConvenioCapitadoRoutes } from './procedimiento-convenio-capitado.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(procedimientoConvenioCapitadoRoutes),
    EntitiesSharedModule,
    ProcedimientoConvenioCapitadoSharedModule,    
    SucursalEntidadSharedModule,    
    TipoAdmisionSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    ProcedimientoConvenioCapitadoComponent,
    ProcedimientoConvenioCapitadoUpSertComponent,
    ProcedimientoConvenioCapitadoDetailsComponent
  ],
  providers: [ ProcedimientoConvenioCapitadoService ]
})
export class ProcedimientoConvenioCapitadoModule { }
