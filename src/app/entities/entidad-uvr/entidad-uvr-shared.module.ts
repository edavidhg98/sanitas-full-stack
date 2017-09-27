import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { EntidadUvrListComponent } from './entidad-uvr-list.component';
import { EntidadUvrService } from './entidad-uvr.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    EntidadUvrListComponent
  ],
  declarations: [
    EntidadUvrListComponent
  ],
  providers: [EntidadUvrService]
})
export class EntidadUvrSharedModule { }
