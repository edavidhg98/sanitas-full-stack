import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoEntidadLaboratorioListComponent } from './tipo-entidad-laboratorio-list.component';
import { TipoEntidadLaboratorioService } from './tipo-entidad-laboratorio.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoEntidadLaboratorioListComponent
  ],
  declarations: [
    TipoEntidadLaboratorioListComponent
  ],
  providers: [TipoEntidadLaboratorioService]
})
export class TipoEntidadLaboratorioSharedModule { }
