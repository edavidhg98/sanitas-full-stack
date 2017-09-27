import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CargosPendientesSharedModule } from '../cargos-pendientes/cargos-pendientes-shared.module';

import { PrioridadSharedModule } from '../prioridad/prioridad-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { DetalleCargosPendientesSharedModule } from '../detalle-cargos-pendientes/detalle-cargos-pendientes-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { CargosPendientesComponent } from './cargos-pendientes.component';
import { CargosPendientesUpSertComponent } from './cargos-pendientes-upsert.component';
import { CargosPendientesDetailsComponent } from './cargos-pendientes-details.component';
import { CargosPendientesService } from './cargos-pendientes.service';

import { cargosPendientesRoutes } from './cargos-pendientes.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cargosPendientesRoutes),
    EntitiesSharedModule,
    CargosPendientesSharedModule,    
    PrioridadSharedModule,    
    SucursalSharedModule,    
    DetalleCargosPendientesSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    CargosPendientesComponent,
    CargosPendientesUpSertComponent,
    CargosPendientesDetailsComponent
  ],
  providers: [ CargosPendientesService ]
})
export class CargosPendientesModule { }
