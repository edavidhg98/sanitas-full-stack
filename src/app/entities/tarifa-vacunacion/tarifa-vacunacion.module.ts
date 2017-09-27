import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TarifaVacunacionSharedModule } from '../tarifa-vacunacion/tarifa-vacunacion-shared.module';

import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';
import { TipoTarifaVacunacionSharedModule } from '../tipo-tarifa-vacunacion/tipo-tarifa-vacunacion-shared.module';
import { VacunasSharedModule } from '../vacunas/vacunas-shared.module';

import { TarifaVacunacionComponent } from './tarifa-vacunacion.component';
import { TarifaVacunacionUpSertComponent } from './tarifa-vacunacion-upsert.component';
import { TarifaVacunacionDetailsComponent } from './tarifa-vacunacion-details.component';
import { TarifaVacunacionService } from './tarifa-vacunacion.service';

import { tarifaVacunacionRoutes } from './tarifa-vacunacion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tarifaVacunacionRoutes),
    EntitiesSharedModule,
    TarifaVacunacionSharedModule,    
    SucursalEntidadSharedModule,    
    TipoTarifaVacunacionSharedModule,    
    VacunasSharedModule    
  ],
  declarations: [
    TarifaVacunacionComponent,
    TarifaVacunacionUpSertComponent,
    TarifaVacunacionDetailsComponent
  ],
  providers: [ TarifaVacunacionService ]
})
export class TarifaVacunacionModule { }
