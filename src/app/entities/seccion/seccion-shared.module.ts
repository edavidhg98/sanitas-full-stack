import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SeccionListComponent } from './seccion-list.component';
import { SeccionService } from './seccion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SeccionListComponent
  ],
  declarations: [
    SeccionListComponent
  ],
  providers: [SeccionService]
})
export class SeccionSharedModule { }
