import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PrioridadListComponent } from './prioridad-list.component';
import { PrioridadService } from './prioridad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PrioridadListComponent
  ],
  declarations: [
    PrioridadListComponent
  ],
  providers: [PrioridadService]
})
export class PrioridadSharedModule { }
