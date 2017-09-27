import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TiempoRecargoSharedModule } from '../tiempo-recargo/tiempo-recargo-shared.module';

import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';

import { TiempoRecargoComponent } from './tiempo-recargo.component';
import { TiempoRecargoUpSertComponent } from './tiempo-recargo-upsert.component';
import { TiempoRecargoDetailsComponent } from './tiempo-recargo-details.component';
import { TiempoRecargoService } from './tiempo-recargo.service';

import { tiempoRecargoRoutes } from './tiempo-recargo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tiempoRecargoRoutes),
    EntitiesSharedModule,
    TiempoRecargoSharedModule,    
    SucursalEntidadSharedModule    
  ],
  declarations: [
    TiempoRecargoComponent,
    TiempoRecargoUpSertComponent,
    TiempoRecargoDetailsComponent
  ],
  providers: [ TiempoRecargoService ]
})
export class TiempoRecargoModule { }
