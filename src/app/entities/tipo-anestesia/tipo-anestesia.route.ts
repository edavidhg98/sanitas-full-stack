import { Routes } from '@angular/router';

import { TipoAnestesiaComponent } from './tipo-anestesia.component';
import { TipoAnestesiaUpSertComponent } from './tipo-anestesia-upsert.component';
import { TipoAnestesiaDetailsComponent } from './tipo-anestesia-details.component';

export const tipoAnestesiaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoAnestesiaComponent },
      { path: 'create', component: TipoAnestesiaUpSertComponent },
      { path: ':id', component: TipoAnestesiaDetailsComponent },
      { path: ':id/update', component: TipoAnestesiaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-anestesia/';
