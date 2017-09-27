import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { AdmisionObservacionesListComponent } from './admision-observaciones-list.component';
import { AdmisionObservacionesService } from './admision-observaciones.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    AdmisionObservacionesListComponent
  ],
  declarations: [
    AdmisionObservacionesListComponent
  ],
  providers: [AdmisionObservacionesService]
})
export class AdmisionObservacionesSharedModule { }
