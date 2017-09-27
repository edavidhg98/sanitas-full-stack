import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PorcentajeMedicoSharedModule } from '../porcentaje-medico/porcentaje-medico-shared.module';


import { PorcentajeMedicoComponent } from './porcentaje-medico.component';
import { PorcentajeMedicoUpSertComponent } from './porcentaje-medico-upsert.component';
import { PorcentajeMedicoDetailsComponent } from './porcentaje-medico-details.component';
import { PorcentajeMedicoService } from './porcentaje-medico.service';

import { porcentajeMedicoRoutes } from './porcentaje-medico.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(porcentajeMedicoRoutes),
    EntitiesSharedModule,
    PorcentajeMedicoSharedModule    
  ],
  declarations: [
    PorcentajeMedicoComponent,
    PorcentajeMedicoUpSertComponent,
    PorcentajeMedicoDetailsComponent
  ],
  providers: [ PorcentajeMedicoService ]
})
export class PorcentajeMedicoModule { }
