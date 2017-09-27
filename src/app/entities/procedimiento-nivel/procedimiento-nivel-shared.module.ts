import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ProcedimientoNivelListComponent } from './procedimiento-nivel-list.component';
import { ProcedimientoNivelService } from './procedimiento-nivel.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ProcedimientoNivelListComponent
  ],
  declarations: [
    ProcedimientoNivelListComponent
  ],
  providers: [ProcedimientoNivelService]
})
export class ProcedimientoNivelSharedModule { }
