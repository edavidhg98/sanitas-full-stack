import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { GrupoProcedimientoListComponent } from './grupo-procedimiento-list.component';
import { GrupoProcedimientoService } from './grupo-procedimiento.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    GrupoProcedimientoListComponent
  ],
  declarations: [
    GrupoProcedimientoListComponent
  ],
  providers: [GrupoProcedimientoService]
})
export class GrupoProcedimientoSharedModule { }
