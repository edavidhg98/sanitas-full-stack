import { Routes } from '@angular/router';

import { TrazabilidadAdmisionListaEsperaHistoriaClinicaComponent } from './trazabilidad-admision-lista-espera-historia-clinica.component';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaUpSertComponent } from './trazabilidad-admision-lista-espera-historia-clinica-upsert.component';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaDetailsComponent } from './trazabilidad-admision-lista-espera-historia-clinica-details.component';

export const trazabilidadAdmisionListaEsperaHistoriaClinicaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TrazabilidadAdmisionListaEsperaHistoriaClinicaComponent },
      { path: 'create', component: TrazabilidadAdmisionListaEsperaHistoriaClinicaUpSertComponent },
      { path: ':id', component: TrazabilidadAdmisionListaEsperaHistoriaClinicaDetailsComponent },
      { path: ':id/update', component: TrazabilidadAdmisionListaEsperaHistoriaClinicaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/trazabilidad-admision-lista-espera-historia-clinica/';
