import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoNovedadListComponent } from './tipo-novedad-list.component';
import { TipoNovedadService } from './tipo-novedad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoNovedadListComponent
  ],
  declarations: [
    TipoNovedadListComponent
  ],
  providers: [TipoNovedadService]
})
export class TipoNovedadSharedModule { }
