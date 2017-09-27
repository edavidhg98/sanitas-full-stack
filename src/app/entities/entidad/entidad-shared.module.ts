import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { EntidadListComponent } from './entidad-list.component';
import { EntidadService } from './entidad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    EntidadListComponent
  ],
  declarations: [
    EntidadListComponent
  ],
  providers: [EntidadService]
})
export class EntidadSharedModule { }
