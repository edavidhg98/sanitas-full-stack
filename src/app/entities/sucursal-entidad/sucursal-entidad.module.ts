import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';

import { EncabezadoCatalogoSharedModule } from '../encabezado-catalogo/encabezado-catalogo-shared.module';
import { MonedaSharedModule } from '../moneda/moneda-shared.module';
import { NivelCargoSharedModule } from '../nivel-cargo/nivel-cargo-shared.module';
import { ProcedimientoConvenioCapitadoSharedModule } from '../procedimiento-convenio-capitado/procedimiento-convenio-capitado-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { TiempoRecargoSharedModule } from '../tiempo-recargo/tiempo-recargo-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { TarifaVacunacionSharedModule } from '../tarifa-vacunacion/tarifa-vacunacion-shared.module';

import { SucursalEntidadComponent } from './sucursal-entidad.component';
import { SucursalEntidadUpSertComponent } from './sucursal-entidad-upsert.component';
import { SucursalEntidadDetailsComponent } from './sucursal-entidad-details.component';
import { SucursalEntidadService } from './sucursal-entidad.service';

import { sucursalEntidadRoutes } from './sucursal-entidad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sucursalEntidadRoutes),
    EntitiesSharedModule,
    SucursalEntidadSharedModule,    
    EncabezadoCatalogoSharedModule,    
    MonedaSharedModule,    
    NivelCargoSharedModule,    
    ProcedimientoConvenioCapitadoSharedModule,    
    SucursalSharedModule,    
    TiempoRecargoSharedModule,    
    EntidadSharedModule,    
    TarifaVacunacionSharedModule    
  ],
  declarations: [
    SucursalEntidadComponent,
    SucursalEntidadUpSertComponent,
    SucursalEntidadDetailsComponent
  ],
  providers: [ SucursalEntidadService ]
})
export class SucursalEntidadModule { }
