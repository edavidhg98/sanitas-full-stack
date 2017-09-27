import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { DetalleCargosPendientesSharedModule } from '../detalle-cargos-pendientes/detalle-cargos-pendientes-shared.module';

import { CargosPendientesSharedModule } from '../cargos-pendientes/cargos-pendientes-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { MotivoSharedModule } from '../motivo/motivo-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { DetalleCargosPendientesComponent } from './detalle-cargos-pendientes.component';
import { DetalleCargosPendientesUpSertComponent } from './detalle-cargos-pendientes-upsert.component';
import { DetalleCargosPendientesDetailsComponent } from './detalle-cargos-pendientes-details.component';
import { DetalleCargosPendientesService } from './detalle-cargos-pendientes.service';

import { detalleCargosPendientesRoutes } from './detalle-cargos-pendientes.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(detalleCargosPendientesRoutes),
    EntitiesSharedModule,
    DetalleCargosPendientesSharedModule,    
    CargosPendientesSharedModule,    
    EntidadSharedModule,    
    MotivoSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    DetalleCargosPendientesComponent,
    DetalleCargosPendientesUpSertComponent,
    DetalleCargosPendientesDetailsComponent
  ],
  providers: [ DetalleCargosPendientesService ]
})
export class DetalleCargosPendientesModule { }
