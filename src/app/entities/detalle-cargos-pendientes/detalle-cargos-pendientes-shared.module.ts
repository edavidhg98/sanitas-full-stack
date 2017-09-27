import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { DetalleCargosPendientesListComponent } from './detalle-cargos-pendientes-list.component';
import { DetalleCargosPendientesService } from './detalle-cargos-pendientes.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    DetalleCargosPendientesListComponent
  ],
  declarations: [
    DetalleCargosPendientesListComponent
  ],
  providers: [DetalleCargosPendientesService]
})
export class DetalleCargosPendientesSharedModule { }
