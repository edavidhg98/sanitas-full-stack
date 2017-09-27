import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { MedicamentoAltoCostoListComponent } from './medicamento-alto-costo-list.component';
import { MedicamentoAltoCostoService } from './medicamento-alto-costo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    MedicamentoAltoCostoListComponent
  ],
  declarations: [
    MedicamentoAltoCostoListComponent
  ],
  providers: [MedicamentoAltoCostoService]
})
export class MedicamentoAltoCostoSharedModule { }
