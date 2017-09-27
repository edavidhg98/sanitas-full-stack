import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CargoAutomaticoSharedModule } from '../cargo-automatico/cargo-automatico-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { CargoAutomaticoComponent } from './cargo-automatico.component';
import { CargoAutomaticoUpSertComponent } from './cargo-automatico-upsert.component';
import { CargoAutomaticoDetailsComponent } from './cargo-automatico-details.component';
import { CargoAutomaticoService } from './cargo-automatico.service';

import { cargoAutomaticoRoutes } from './cargo-automatico.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cargoAutomaticoRoutes),
    EntitiesSharedModule,
    CargoAutomaticoSharedModule,    
    SucursalSharedModule,    
    EntidadSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    CargoAutomaticoComponent,
    CargoAutomaticoUpSertComponent,
    CargoAutomaticoDetailsComponent
  ],
  providers: [ CargoAutomaticoService ]
})
export class CargoAutomaticoModule { }
