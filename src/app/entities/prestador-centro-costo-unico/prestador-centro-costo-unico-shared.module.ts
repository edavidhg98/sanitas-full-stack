import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PrestadorCentroCostoUnicoListComponent } from './prestador-centro-costo-unico-list.component';
import { PrestadorCentroCostoUnicoService } from './prestador-centro-costo-unico.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PrestadorCentroCostoUnicoListComponent
  ],
  declarations: [
    PrestadorCentroCostoUnicoListComponent
  ],
  providers: [PrestadorCentroCostoUnicoService]
})
export class PrestadorCentroCostoUnicoSharedModule { }
