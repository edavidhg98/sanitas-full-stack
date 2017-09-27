import { Routes } from '@angular/router';

import { TipoCirugiaComponent } from './tipo-cirugia.component';
import { TipoCirugiaUpSertComponent } from './tipo-cirugia-upsert.component';
import { TipoCirugiaDetailsComponent } from './tipo-cirugia-details.component';

export const tipoCirugiaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoCirugiaComponent },
      { path: 'create', component: TipoCirugiaUpSertComponent },
      { path: ':id', component: TipoCirugiaDetailsComponent },
      { path: ':id/update', component: TipoCirugiaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-cirugia/';
