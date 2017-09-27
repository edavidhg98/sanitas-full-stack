import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ProcedimientosRisListComponent } from './procedimientos-ris-list.component';
import { ProcedimientosRisService } from './procedimientos-ris.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ProcedimientosRisListComponent
  ],
  declarations: [
    ProcedimientosRisListComponent
  ],
  providers: [ProcedimientosRisService]
})
export class ProcedimientosRisSharedModule { }
