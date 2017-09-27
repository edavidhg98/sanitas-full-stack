import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { LocalidadListComponent } from './localidad-list.component';
import { LocalidadService } from './localidad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    LocalidadListComponent
  ],
  declarations: [
    LocalidadListComponent
  ],
  providers: [LocalidadService]
})
export class LocalidadSharedModule { }
