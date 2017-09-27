import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { InstitucionListComponent } from './institucion-list.component';
import { InstitucionService } from './institucion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    InstitucionListComponent
  ],
  declarations: [
    InstitucionListComponent
  ],
  providers: [InstitucionService]
})
export class InstitucionSharedModule { }
