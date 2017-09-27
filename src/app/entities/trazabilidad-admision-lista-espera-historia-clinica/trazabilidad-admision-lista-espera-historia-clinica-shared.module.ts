import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TrazabilidadAdmisionListaEsperaHistoriaClinicaListComponent } from './trazabilidad-admision-lista-espera-historia-clinica-list.component';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaService } from './trazabilidad-admision-lista-espera-historia-clinica.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TrazabilidadAdmisionListaEsperaHistoriaClinicaListComponent
  ],
  declarations: [
    TrazabilidadAdmisionListaEsperaHistoriaClinicaListComponent
  ],
  providers: [TrazabilidadAdmisionListaEsperaHistoriaClinicaService]
})
export class TrazabilidadAdmisionListaEsperaHistoriaClinicaSharedModule { }
