import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TarifaVacunacionListComponent } from './tarifa-vacunacion-list.component';
import { TarifaVacunacionService } from './tarifa-vacunacion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TarifaVacunacionListComponent
  ],
  declarations: [
    TarifaVacunacionListComponent
  ],
  providers: [TarifaVacunacionService]
})
export class TarifaVacunacionSharedModule { }
