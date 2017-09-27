import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PorcentajeMedicoListComponent } from './porcentaje-medico-list.component';
import { PorcentajeMedicoService } from './porcentaje-medico.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PorcentajeMedicoListComponent
  ],
  declarations: [
    PorcentajeMedicoListComponent
  ],
  providers: [PorcentajeMedicoService]
})
export class PorcentajeMedicoSharedModule { }
