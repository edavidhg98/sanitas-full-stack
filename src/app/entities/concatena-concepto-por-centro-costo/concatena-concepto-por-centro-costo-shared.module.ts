import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ConcatenaConceptoPorCentroCostoListComponent } from './concatena-concepto-por-centro-costo-list.component';
import { ConcatenaConceptoPorCentroCostoService } from './concatena-concepto-por-centro-costo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ConcatenaConceptoPorCentroCostoListComponent
  ],
  declarations: [
    ConcatenaConceptoPorCentroCostoListComponent
  ],
  providers: [ConcatenaConceptoPorCentroCostoService]
})
export class ConcatenaConceptoPorCentroCostoSharedModule { }
