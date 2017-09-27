import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SubGrupoProcedimientoListComponent } from './sub-grupo-procedimiento-list.component';
import { SubGrupoProcedimientoService } from './sub-grupo-procedimiento.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SubGrupoProcedimientoListComponent
  ],
  declarations: [
    SubGrupoProcedimientoListComponent
  ],
  providers: [SubGrupoProcedimientoService]
})
export class SubGrupoProcedimientoSharedModule { }
