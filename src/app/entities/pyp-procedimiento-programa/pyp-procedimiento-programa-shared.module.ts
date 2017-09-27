import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PypProcedimientoProgramaListComponent } from './pyp-procedimiento-programa-list.component';
import { PypProcedimientoProgramaService } from './pyp-procedimiento-programa.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PypProcedimientoProgramaListComponent
  ],
  declarations: [
    PypProcedimientoProgramaListComponent
  ],
  providers: [PypProcedimientoProgramaService]
})
export class PypProcedimientoProgramaSharedModule { }
