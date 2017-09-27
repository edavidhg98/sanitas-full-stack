import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { DiagnosticoSharedModule } from '../diagnostico/diagnostico-shared.module';


import { DiagnosticoComponent } from './diagnostico.component';
import { DiagnosticoUpSertComponent } from './diagnostico-upsert.component';
import { DiagnosticoDetailsComponent } from './diagnostico-details.component';
import { DiagnosticoService } from './diagnostico.service';

import { diagnosticoRoutes } from './diagnostico.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(diagnosticoRoutes),
    EntitiesSharedModule,
    DiagnosticoSharedModule    
  ],
  declarations: [
    DiagnosticoComponent,
    DiagnosticoUpSertComponent,
    DiagnosticoDetailsComponent
  ],
  providers: [ DiagnosticoService ]
})
export class DiagnosticoModule { }
