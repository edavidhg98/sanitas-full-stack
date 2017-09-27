import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EncabezadoResultadoSharedModule } from '../encabezado-resultado/encabezado-resultado-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { EncabezadoResultadoComponent } from './encabezado-resultado.component';
import { EncabezadoResultadoUpSertComponent } from './encabezado-resultado-upsert.component';
import { EncabezadoResultadoDetailsComponent } from './encabezado-resultado-details.component';
import { EncabezadoResultadoService } from './encabezado-resultado.service';

import { encabezadoResultadoRoutes } from './encabezado-resultado.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(encabezadoResultadoRoutes),
    EntitiesSharedModule,
    EncabezadoResultadoSharedModule,    
    SucursalSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    EncabezadoResultadoComponent,
    EncabezadoResultadoUpSertComponent,
    EncabezadoResultadoDetailsComponent
  ],
  providers: [ EncabezadoResultadoService ]
})
export class EncabezadoResultadoModule { }
