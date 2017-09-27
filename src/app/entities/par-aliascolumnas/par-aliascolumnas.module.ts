import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ParAliascolumnasSharedModule } from '../par-aliascolumnas/par-aliascolumnas-shared.module';


import { ParAliascolumnasComponent } from './par-aliascolumnas.component';
import { ParAliascolumnasUpSertComponent } from './par-aliascolumnas-upsert.component';
import { ParAliascolumnasDetailsComponent } from './par-aliascolumnas-details.component';
import { ParAliascolumnasService } from './par-aliascolumnas.service';

import { parAliascolumnasRoutes } from './par-aliascolumnas.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(parAliascolumnasRoutes),
    EntitiesSharedModule,
    ParAliascolumnasSharedModule    
  ],
  declarations: [
    ParAliascolumnasComponent,
    ParAliascolumnasUpSertComponent,
    ParAliascolumnasDetailsComponent
  ],
  providers: [ ParAliascolumnasService ]
})
export class ParAliascolumnasModule { }
