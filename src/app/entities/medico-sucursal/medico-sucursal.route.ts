import { Routes } from '@angular/router';

import { MedicoSucursalComponent } from './medico-sucursal.component';
import { MedicoSucursalUpSertComponent } from './medico-sucursal-upsert.component';
import { MedicoSucursalDetailsComponent } from './medico-sucursal-details.component';

export const medicoSucursalRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MedicoSucursalComponent },
      { path: 'create', component: MedicoSucursalUpSertComponent },
      { path: ':id', component: MedicoSucursalDetailsComponent },
      { path: ':id/update', component: MedicoSucursalUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/medico-sucursal/';
