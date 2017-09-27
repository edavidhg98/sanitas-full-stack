import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ProcedimientoListComponent } from './procedimiento-list.component';
import { ProcedimientoService } from './procedimiento.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ProcedimientoListComponent
  ],
  declarations: [
    ProcedimientoListComponent
  ],
  providers: [ProcedimientoService]
})
export class ProcedimientoSharedModule { }
