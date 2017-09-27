import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SucursalEntidadListComponent } from './sucursal-entidad-list.component';
import { SucursalEntidadService } from './sucursal-entidad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SucursalEntidadListComponent
  ],
  declarations: [
    SucursalEntidadListComponent
  ],
  providers: [SucursalEntidadService]
})
export class SucursalEntidadSharedModule { }
