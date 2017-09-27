import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { HomologacionEntidadListComponent } from './homologacion-entidad-list.component';
import { HomologacionEntidadService } from './homologacion-entidad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    HomologacionEntidadListComponent
  ],
  declarations: [
    HomologacionEntidadListComponent
  ],
  providers: [HomologacionEntidadService]
})
export class HomologacionEntidadSharedModule { }
