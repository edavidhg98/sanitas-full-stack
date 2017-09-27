import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PlanesListComponent } from './planes-list.component';
import { PlanesService } from './planes.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PlanesListComponent
  ],
  declarations: [
    PlanesListComponent
  ],
  providers: [PlanesService]
})
export class PlanesSharedModule { }
