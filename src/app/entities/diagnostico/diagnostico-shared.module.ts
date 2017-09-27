import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { DiagnosticoListComponent } from './diagnostico-list.component';
import { DiagnosticoService } from './diagnostico.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    DiagnosticoListComponent
  ],
  declarations: [
    DiagnosticoListComponent
  ],
  providers: [DiagnosticoService]
})
export class DiagnosticoSharedModule { }
