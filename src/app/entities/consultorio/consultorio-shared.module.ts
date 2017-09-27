import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ConsultorioListComponent } from './consultorio-list.component';
import { ConsultorioService } from './consultorio.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ConsultorioListComponent
  ],
  declarations: [
    ConsultorioListComponent
  ],
  providers: [ConsultorioService]
})
export class ConsultorioSharedModule { }
