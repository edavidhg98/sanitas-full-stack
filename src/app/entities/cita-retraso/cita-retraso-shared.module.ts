import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CitaRetrasoListComponent } from './cita-retraso-list.component';
import { CitaRetrasoService } from './cita-retraso.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CitaRetrasoListComponent
  ],
  declarations: [
    CitaRetrasoListComponent
  ],
  providers: [CitaRetrasoService]
})
export class CitaRetrasoSharedModule { }
