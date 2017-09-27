import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SucursalCentroCostoSharedModule } from '../sucursal-centro-costo/sucursal-centro-costo-shared.module';


import { SucursalCentroCostoComponent } from './sucursal-centro-costo.component';
import { SucursalCentroCostoUpSertComponent } from './sucursal-centro-costo-upsert.component';
import { SucursalCentroCostoDetailsComponent } from './sucursal-centro-costo-details.component';
import { SucursalCentroCostoService } from './sucursal-centro-costo.service';

import { sucursalCentroCostoRoutes } from './sucursal-centro-costo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sucursalCentroCostoRoutes),
    EntitiesSharedModule,
    SucursalCentroCostoSharedModule    
  ],
  declarations: [
    SucursalCentroCostoComponent,
    SucursalCentroCostoUpSertComponent,
    SucursalCentroCostoDetailsComponent
  ],
  providers: [ SucursalCentroCostoService ]
})
export class SucursalCentroCostoModule { }
