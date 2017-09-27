import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SucursalCentroCostoListComponent } from './sucursal-centro-costo-list.component';
import { SucursalCentroCostoService } from './sucursal-centro-costo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SucursalCentroCostoListComponent
  ],
  declarations: [
    SucursalCentroCostoListComponent
  ],
  providers: [SucursalCentroCostoService]
})
export class SucursalCentroCostoSharedModule { }
