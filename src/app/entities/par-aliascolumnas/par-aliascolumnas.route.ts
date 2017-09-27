import { Routes } from '@angular/router';

import { ParAliascolumnasComponent } from './par-aliascolumnas.component';
import { ParAliascolumnasUpSertComponent } from './par-aliascolumnas-upsert.component';
import { ParAliascolumnasDetailsComponent } from './par-aliascolumnas-details.component';

export const parAliascolumnasRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ParAliascolumnasComponent },
      { path: 'create', component: ParAliascolumnasUpSertComponent },
      { path: ':id', component: ParAliascolumnasDetailsComponent },
      { path: ':id/update', component: ParAliascolumnasUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/par-aliascolumnas/';
