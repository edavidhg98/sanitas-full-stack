import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ConcatenaConceptoPorCentroCostoSharedModule } from '../concatena-concepto-por-centro-costo/concatena-concepto-por-centro-costo-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { ConcatenaConceptoPorCentroCostoComponent } from './concatena-concepto-por-centro-costo.component';
import { ConcatenaConceptoPorCentroCostoUpSertComponent } from './concatena-concepto-por-centro-costo-upsert.component';
import { ConcatenaConceptoPorCentroCostoDetailsComponent } from './concatena-concepto-por-centro-costo-details.component';
import { ConcatenaConceptoPorCentroCostoService } from './concatena-concepto-por-centro-costo.service';

import { concatenaConceptoPorCentroCostoRoutes } from './concatena-concepto-por-centro-costo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(concatenaConceptoPorCentroCostoRoutes),
    EntitiesSharedModule,
    ConcatenaConceptoPorCentroCostoSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    ConcatenaConceptoPorCentroCostoComponent,
    ConcatenaConceptoPorCentroCostoUpSertComponent,
    ConcatenaConceptoPorCentroCostoDetailsComponent
  ],
  providers: [ ConcatenaConceptoPorCentroCostoService ]
})
export class ConcatenaConceptoPorCentroCostoModule { }
