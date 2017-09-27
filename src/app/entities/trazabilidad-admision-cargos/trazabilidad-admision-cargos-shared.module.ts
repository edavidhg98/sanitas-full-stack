import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TrazabilidadAdmisionCargosListComponent } from './trazabilidad-admision-cargos-list.component';
import { TrazabilidadAdmisionCargosService } from './trazabilidad-admision-cargos.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TrazabilidadAdmisionCargosListComponent
  ],
  declarations: [
    TrazabilidadAdmisionCargosListComponent
  ],
  providers: [TrazabilidadAdmisionCargosService]
})
export class TrazabilidadAdmisionCargosSharedModule { }
