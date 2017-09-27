import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { MedicoSucursalEntidadListComponent } from './medico-sucursal-entidad-list.component';
import { MedicoSucursalEntidadService } from './medico-sucursal-entidad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    MedicoSucursalEntidadListComponent
  ],
  declarations: [
    MedicoSucursalEntidadListComponent
  ],
  providers: [MedicoSucursalEntidadService]
})
export class MedicoSucursalEntidadSharedModule { }
