import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CargosPendientesListComponent } from './cargos-pendientes-list.component';
import { CargosPendientesService } from './cargos-pendientes.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CargosPendientesListComponent
  ],
  declarations: [
    CargosPendientesListComponent
  ],
  providers: [CargosPendientesService]
})
export class CargosPendientesSharedModule { }
