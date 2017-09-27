import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoTarifaVacunacionSharedModule } from '../tipo-tarifa-vacunacion/tipo-tarifa-vacunacion-shared.module';

import { TarifaVacunacionSharedModule } from '../tarifa-vacunacion/tarifa-vacunacion-shared.module';

import { TipoTarifaVacunacionComponent } from './tipo-tarifa-vacunacion.component';
import { TipoTarifaVacunacionUpSertComponent } from './tipo-tarifa-vacunacion-upsert.component';
import { TipoTarifaVacunacionDetailsComponent } from './tipo-tarifa-vacunacion-details.component';
import { TipoTarifaVacunacionService } from './tipo-tarifa-vacunacion.service';

import { tipoTarifaVacunacionRoutes } from './tipo-tarifa-vacunacion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoTarifaVacunacionRoutes),
    EntitiesSharedModule,
    TipoTarifaVacunacionSharedModule,    
    TarifaVacunacionSharedModule    
  ],
  declarations: [
    TipoTarifaVacunacionComponent,
    TipoTarifaVacunacionUpSertComponent,
    TipoTarifaVacunacionDetailsComponent
  ],
  providers: [ TipoTarifaVacunacionService ]
})
export class TipoTarifaVacunacionModule { }
