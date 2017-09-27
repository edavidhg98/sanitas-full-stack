import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoTarifaVacunacionListComponent } from './tipo-tarifa-vacunacion-list.component';
import { TipoTarifaVacunacionService } from './tipo-tarifa-vacunacion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoTarifaVacunacionListComponent
  ],
  declarations: [
    TipoTarifaVacunacionListComponent
  ],
  providers: [TipoTarifaVacunacionService]
})
export class TipoTarifaVacunacionSharedModule { }
