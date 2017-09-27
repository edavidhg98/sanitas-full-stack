import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PrioridadSharedModule } from '../prioridad/prioridad-shared.module';

import { CargosPendientesSharedModule } from '../cargos-pendientes/cargos-pendientes-shared.module';
import { PedidosSharedModule } from '../pedidos/pedidos-shared.module';

import { PrioridadComponent } from './prioridad.component';
import { PrioridadUpSertComponent } from './prioridad-upsert.component';
import { PrioridadDetailsComponent } from './prioridad-details.component';
import { PrioridadService } from './prioridad.service';

import { prioridadRoutes } from './prioridad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(prioridadRoutes),
    EntitiesSharedModule,
    PrioridadSharedModule,    
    CargosPendientesSharedModule,    
    PedidosSharedModule    
  ],
  declarations: [
    PrioridadComponent,
    PrioridadUpSertComponent,
    PrioridadDetailsComponent
  ],
  providers: [ PrioridadService ]
})
export class PrioridadModule { }
