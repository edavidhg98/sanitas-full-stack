import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ExcepcionRegargoSharedModule } from '../excepcion-regargo/excepcion-regargo-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { TipoAdmisionSharedModule } from '../tipo-admision/tipo-admision-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { ExcepcionRegargoComponent } from './excepcion-regargo.component';
import { ExcepcionRegargoUpSertComponent } from './excepcion-regargo-upsert.component';
import { ExcepcionRegargoDetailsComponent } from './excepcion-regargo-details.component';
import { ExcepcionRegargoService } from './excepcion-regargo.service';

import { excepcionRegargoRoutes } from './excepcion-regargo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(excepcionRegargoRoutes),
    EntitiesSharedModule,
    ExcepcionRegargoSharedModule,    
    SucursalSharedModule,    
    TipoAdmisionSharedModule,    
    EntidadSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    ExcepcionRegargoComponent,
    ExcepcionRegargoUpSertComponent,
    ExcepcionRegargoDetailsComponent
  ],
  providers: [ ExcepcionRegargoService ]
})
export class ExcepcionRegargoModule { }
