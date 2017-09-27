import { Routes } from '@angular/router';

import { ConsultaExternaPypComponent } from './consulta-externa-pyp.component';
import { ConsultaExternaPypUpSertComponent } from './consulta-externa-pyp-upsert.component';
import { ConsultaExternaPypDetailsComponent } from './consulta-externa-pyp-details.component';

export const consultaExternaPypRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ConsultaExternaPypComponent },
      { path: 'create', component: ConsultaExternaPypUpSertComponent },
      { path: ':id', component: ConsultaExternaPypDetailsComponent },
      { path: ':id/update', component: ConsultaExternaPypUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/consulta-externa-pyp/';
