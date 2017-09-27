import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaSharedModule } from '../trazabilidad-admision-lista-espera-historia-clinica/trazabilidad-admision-lista-espera-historia-clinica-shared.module';

import { TrazabilidadAdmisionSharedModule } from '../trazabilidad-admision/trazabilidad-admision-shared.module';

import { TrazabilidadAdmisionListaEsperaHistoriaClinicaComponent } from './trazabilidad-admision-lista-espera-historia-clinica.component';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaUpSertComponent } from './trazabilidad-admision-lista-espera-historia-clinica-upsert.component';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaDetailsComponent } from './trazabilidad-admision-lista-espera-historia-clinica-details.component';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaService } from './trazabilidad-admision-lista-espera-historia-clinica.service';

import { trazabilidadAdmisionListaEsperaHistoriaClinicaRoutes } from './trazabilidad-admision-lista-espera-historia-clinica.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(trazabilidadAdmisionListaEsperaHistoriaClinicaRoutes),
    EntitiesSharedModule,
    TrazabilidadAdmisionListaEsperaHistoriaClinicaSharedModule,    
    TrazabilidadAdmisionSharedModule    
  ],
  declarations: [
    TrazabilidadAdmisionListaEsperaHistoriaClinicaComponent,
    TrazabilidadAdmisionListaEsperaHistoriaClinicaUpSertComponent,
    TrazabilidadAdmisionListaEsperaHistoriaClinicaDetailsComponent
  ],
  providers: [ TrazabilidadAdmisionListaEsperaHistoriaClinicaService ]
})
export class TrazabilidadAdmisionListaEsperaHistoriaClinicaModule { }
