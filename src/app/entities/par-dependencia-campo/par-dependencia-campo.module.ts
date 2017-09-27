import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ParDependenciaCampoSharedModule } from '../par-dependencia-campo/par-dependencia-campo-shared.module';


import { ParDependenciaCampoComponent } from './par-dependencia-campo.component';
import { ParDependenciaCampoUpSertComponent } from './par-dependencia-campo-upsert.component';
import { ParDependenciaCampoDetailsComponent } from './par-dependencia-campo-details.component';
import { ParDependenciaCampoService } from './par-dependencia-campo.service';

import { parDependenciaCampoRoutes } from './par-dependencia-campo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(parDependenciaCampoRoutes),
    EntitiesSharedModule,
    ParDependenciaCampoSharedModule    
  ],
  declarations: [
    ParDependenciaCampoComponent,
    ParDependenciaCampoUpSertComponent,
    ParDependenciaCampoDetailsComponent
  ],
  providers: [ ParDependenciaCampoService ]
})
export class ParDependenciaCampoModule { }
