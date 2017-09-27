import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProcedimientoCentroCostoSharedModule } from '../procedimiento-centro-costo/procedimiento-centro-costo-shared.module';

import { PrestadorSharedModule } from '../prestador/prestador-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { ProcedimientoCentroCostoComponent } from './procedimiento-centro-costo.component';
import { ProcedimientoCentroCostoUpSertComponent } from './procedimiento-centro-costo-upsert.component';
import { ProcedimientoCentroCostoDetailsComponent } from './procedimiento-centro-costo-details.component';
import { ProcedimientoCentroCostoService } from './procedimiento-centro-costo.service';

import { procedimientoCentroCostoRoutes } from './procedimiento-centro-costo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(procedimientoCentroCostoRoutes),
    EntitiesSharedModule,
    ProcedimientoCentroCostoSharedModule,    
    PrestadorSharedModule,    
    SucursalSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    ProcedimientoCentroCostoComponent,
    ProcedimientoCentroCostoUpSertComponent,
    ProcedimientoCentroCostoDetailsComponent
  ],
  providers: [ ProcedimientoCentroCostoService ]
})
export class ProcedimientoCentroCostoModule { }
