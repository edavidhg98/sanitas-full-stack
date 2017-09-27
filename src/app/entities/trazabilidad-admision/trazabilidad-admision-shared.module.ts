import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TrazabilidadAdmisionListComponent } from './trazabilidad-admision-list.component';
import { TrazabilidadAdmisionService } from './trazabilidad-admision.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TrazabilidadAdmisionListComponent
  ],
  declarations: [
    TrazabilidadAdmisionListComponent
  ],
  providers: [TrazabilidadAdmisionService]
})
export class TrazabilidadAdmisionSharedModule { }
