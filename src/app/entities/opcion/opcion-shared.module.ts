import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { OpcionListComponent } from './opcion-list.component';
import { OpcionService } from './opcion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    OpcionListComponent
  ],
  declarations: [
    OpcionListComponent
  ],
  providers: [OpcionService]
})
export class OpcionSharedModule { }
